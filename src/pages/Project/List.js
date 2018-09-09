import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Icon, List, Avatar, Progress } from 'antd';
import moment from 'moment';
import Link from 'umi/link';

import AvatarList from '@/components/AvatarList';
import Ellipsis from '@/components/Ellipsis';

import styles from './ProjectList.less';

@connect(({ project, loading }) => ({
  list: project.list,
  loading: loading.models.list,
}))
class CardList extends PureComponent {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'project/fetchProjectList',
      payload: {
        count: 8,
      },
    });

    //dispatch({
    //  type: 'project/fetchAccountNumber',
    //  payload: {
    //    "method": "list_account_balances",
    //    "params": ["dw-huangxiaolei", ""],
    //    "id": 8 },
    //});
  }

  render() {
    const { list, loading } = this.props;
    const ListContent = ({ data: { owner, createdAt, percent, status } }) => <div />;
    const cardList = list ? (
      <List
        rowKey="id"
        loading={loading}
        grid={{ gutter: 24, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Link to={`/project/detail/${item.id}`}>
              <Card
                className={styles.card}
                hoverable
                cover={<img alt={item.title} src={item.cover} />}
              >
                <Card.Meta
                  title={item.title}
                  description={<Ellipsis lines={2}>{item.subDescription}</Ellipsis>}
                />
                <div className={styles.cardItemContent}>
                  <br />
                  <p>Begain time: {moment(item.createdAt).format('YYYY-MM-DD HH:mm')}</p>
                  <Progress percent={item.percent} status={item.status} strokeWidth={6} />
                </div>
              </Card>
            </Link>
          </List.Item>
        )}
      />
    ) : null;
    return (
      <div>
        <div style={{ marginBottom: 32 }}>
          <img
            style={{ width: '100%', borderRadius: 3 }}
            src="http://7xsuii.com1.z0.glb.clouddn.com/banner.jpg"
          />
          <div style={{ position: 'absolute', top: '240px', left: '80px' }}>
            <h1 style={{ fontSize: '3em', color: '#fff' }}>Wanxiang Innova City</h1>
            <h1 style={{ fontSize: '3em', color: '#fff' }}>Own Your Smart City</h1>
          </div>
        </div>

        <div className={styles.cardList}>{cardList}</div>
      </div>
    );
  }
}

export default CardList;
