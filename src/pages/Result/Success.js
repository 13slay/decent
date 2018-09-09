import React, { Fragment, PureComponent } from 'react';
import { connect } from 'dva';
import { isEmpty, find } from 'lodash';
import router from 'umi/router';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Button, Row, Col, Icon, Steps, Card } from 'antd';
import Result from '@/components/Result';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const actions = (
  <Fragment>
    <Button
      type="primary"
      onClick={() => {
        router.push('/project/list');
      }}
    >
      <FormattedMessage id="app.result.success.btn-return" defaultMessage="Back to list" />
    </Button>
  </Fragment>
);

const detailSelector = (list, current) => find(list, item => item.id === current);
@connect(({ project }) => ({
  result: project.result,
  detail: detailSelector(project.list, project.current),
  number: project.number,
}))
class Success extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'project/fetchProjectList',
    });
  }
  renderExtra = () => {
    const { result, detail, number } = this.props;
    return (
      <Fragment>
        <div
          style={{
            fontSize: 16,
            color: 'rgba(0, 0, 0, 0.85)',
            fontWeight: '500',
            marginBottom: 20,
          }}
        >
          <p>交易Hash: {result.txHash}</p>
          <p>项目名称: {detail.title}</p>
          <p>认购数量: {number}</p>
        </div>
      </Fragment>
    );
  };
  render() {
    const { result, detail } = this.props;
    if (isEmpty(result) || isEmpty(detail)) return null;
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Result
            type="success"
            title={formatMessage({ id: 'app.result.success.title' })}
            extra={this.renderExtra()}
            actions={actions}
            style={{ marginTop: 48, marginBottom: 16 }}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Success;
