import { queryProject } from '@/services/api';
import request from '@/utils/request';
//var express = require("express");
//var app = express();

const buy = (number, crowdAddress, callback) => {
  if (!web3) {
    return Promise.reject();
  }
  const account = web3.eth.coinbase;
  const weiPerShare = '10000000000000000';
  const amount = number * weiPerShare;
  web3.eth.sendTransaction(
    {
      from: account,
      to: crowdAddress,
      value: amount,
    },
    callback
  );
};

export default {
  namespace: 'project',

  state: {
    list: [],
    number: 100,
    current: '',
    result: {},
  },

  effects: {
    *buy({ payload }, { call, put }) {
      yield buy(payload.number, payload.crowdAddress, payload.callback);
    },

    *fetchProjectList(_, { call, put }) {
      const response = yield call(queryProject);
      yield put({
        type: 'saveProjectList',
        payload: Array.isArray(response) ? response : [],
      });
    },

    *fetchAccountNumber({ payload }, { call, put  }) {
      try {
        const url = 'https://qinyuchengye.com';
        const requestOption = {
          url: url,
          body: {
            method: 'POST',
            body: JSON.stringify(payload),
          },
        };
        console.log('payload====',payload)
        // 发起异步请求
        fetch(url, requestOption.body)
          .then(res => res.text())
          .then((val)=> {
             //yield put({ type: 'project/fetchBackCITYL' })
          })
      } catch (err) {
        //yield put({ type: 'fetchAccountNumber', data: response });
      }
    },

    *fetchBackCITYL({ payload }, { call, put  }) {
      try {
        const requestOption = {
          url: 'https://qinyuchengye.com',
          body: {
            method: 'POST',
            body: {
              "method": "transfer2",
              "params": [ "dw-huang","dw-huangxiaolei", "10", "CITYL", "memo"],
              "id": 10
            },
          },
        };
        console.log('payload====',payload)
        // 发起异步请求
        const response = yield call(request, requestOption);
        // 根据返回数据，渲染结果
        console.log('response====',response)
        if (response ) {
          //yield put({ type: 'fetchAccountNumber', data: response});
        } else {
          //yield put({ type: 'fetchAccountNumber', data: response });
        }
      } catch (err) {
        //yield put({ type: 'fetchAccountNumber', data: response });
      }
    },

    *fetchBuy({ payload }, { call, put  }) {
      try {
        const requestOption = {
          url: 'https://as.decentfans.org/hack/cityland',
          body: {
            method: 'POST',
            body: JSON.stringify(payload),
          },
        };
        console.log('payload====',payload)
        // 发起异步请求
        const response = yield call(request, requestOption);
        // 根据返回数据，渲染结果
        console.log('response====',response)
        if (response ) {
          yield put({ type: 'fetchBuy', data: response});

        } else {
          //yield put({ type: 'fetchAccountNumber', data: response });
        }
      } catch (err) {
        //yield put({ type: 'fetchAccountNumber', data: response });
      }
    },
  },

  reducers: {
    saveProjectList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    fetchAccountNumber(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveCurrent(state, action) {
      return {
        ...state,
        current: action.payload,
      };
    },
    saveResult(state, action) {
      console.log(action);
      return {
        ...state,
        result: action.payload,
      };
    },
    saveNumber(state, action) {
      return {
        ...state,
        number: action.payload,
      };
    },
  },
};
