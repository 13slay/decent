import React, { PureComponent } from 'react';
import router from 'umi/router';
import { find, isEmpty } from 'lodash';
import { connect } from 'dva';
import moment from 'moment';
import { Col, Row, Affix, Card, Button, InputNumber, Slider } from 'antd';
import { Pie, MiniProgress } from '@/components/Charts';
import ReactMarkdonw from 'react-markdown';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './ProjectDetail.less';

const detailSelector = (id, list) => {
  return find(list, item => item.id === id);
};
@connect(({ project }) => ({
  list: project.list,
  detail: detailSelector(project.current, project.list),
}))
class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }
  componentDidMount() {
    const { dispatch, match, list } = this.props;
    const { id } = match.params;
    if (isEmpty(list)) {
      dispatch({ type: 'project/fetchProjectList' });
    }
    dispatch({ type: 'project/saveCurrent', payload: id });
  }

  onChange = value => {
    const { dispatch } = this.props;
    dispatch({ type: 'saveNumber', payload: value });
    this.setState({ number: value });
  };

  onBuy = () => {
    const { dispatch, detail } = this.props;
    const { number } = this.state;
    const callback = (err, txHash) => {
      if (err) {
        dispatch({ type: 'project/saveResult', payload: err });
        router.push('/result/fail');
        return false;
      }
      dispatch({ type: 'project/saveResult', payload: { txHash } });
      router.push('/result/success');
    };
    dispatch({
      type: 'project/fetchAccountNumber',
      payload: {
        "method": "transfer2",
        "params": ["dw-huangxiaolei", "dw-cityland", number, "DCT", "认筹"],
        "id": 10
      }
    });
  };

  render() {
    const { detail, list } = this.props;
    const { number } = this.state;
    const firstHeight = 300;
    if (!detail) return null;
    return (
      <PageHeaderWrapper title={detail.name} style={{ marginLeft: 0, marginRight: 0 }}>
        <Row gutter={24}>
          <Col xl={18}>
            <Row gutter={24} style={{ marginBottom: 24 }}>
              <Col xl={12}>
                <Card title="Item information" bodyStyle={{ height: firstHeight }}>
                  <p>Item Name: {detail.title}</p>
                  <p>Item side: {detail.creator}</p>
                </Card>
              </Col>
              <Col xl={12}>
                <Card title="Investment proportion" bodyStyle={{ height: firstHeight, padding: 8 }}>
                  <Pie
                    hasLegend
                    data={detail.asset.map(item => ({ x: item.name, y: item.ratio }))}
                    valueFormat={item => item.ratio}
                    lineWidth={1}
                    height={286}
                  />
                </Card>
              </Col>
            </Row>
            <Row style={{ marginBottom: 24 }}>
              <Col xl={24}>
                <Card title="Progress">
                  <Row type="flex">
                    <p>Number of Participants: {detail.process.joined}</p>
                  </Row>
                  <MiniProgress
                    percent={detail.process.percent * 100}
                    strokeWidth={8}
                    target={80}
                    color="#13C2C2"
                  />
                </Card>
              </Col>
            </Row>
            <Card title="Item details">
              <div className={styles.detail}>
                <ReactMarkdonw source={detail.detail} />
              </div>
            </Card>
          </Col>
          <Col xl={6}>
            <Affix offsetTop={64}>
              <Card title="Subscribe equity">
                <p>Statement of equity: </p>
                <p>Subscription quota: {detail.limit}</p>
                <Row type="flex" justify="center" style={{ marginTop: 36 }}>
                  <Col style={{ flex: 8 }}>
                    <Slider
                      min={1}
                      max={detail.limit}
                      onChange={e => this.onChange(e)}
                      value={number}
                    />
                  </Col>
                  <Col style={{ flex: 4 }}>
                    <InputNumber
                      min={1}
                      max={detail.limit}
                      style={{ marginLeft: 16 }}
                      value={number}
                      onChange={e => this.onChange(e)}
                    />
                  </Col>
                  <Button
                    type="primary"
                    block
                    style={{ height: 48, fontSize: 18, marginTop: 16 }}
                    onClick={this.onBuy}
                  >
                    Subscribe
                  </Button>
                </Row>
              </Card>
            </Affix>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default Detail;
