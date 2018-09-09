import { queryProject } from '@/services/api';
import request from '@/utils/request';
import router from 'umi/router';
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

    *fetchAccountNumber({ payload }, { call, put,callback  }) {
      try {
        const url = 'http://qinyuchengye.com';
        const requestOption = {
          url: url,
          body: {
            method: 'POST',
            body: JSON.stringify(payload),
          },
        };
        console.log('payload====', payload)
        // 发起异步请求
        let response = yield fetch(url, requestOption.body);
        response = yield response.text();
        yield put({type: 'fetchBackCITYL', payload: JSON.parse(response), data: payload.params})

      } catch (err) {
        //yield put({ type: 'fetchAccountNumber', data: response });
      }
    },

    *fetchBackCITYL({ payload,data }, { call, put  }) {
      try {
        const requestOption = {
          url: 'http://qinyuchengye.com',
          body: {
            method: 'POST',
            body: JSON.stringify({
              "method": "transfer2",
              "params": ["dw-huang", "dw-huangxiaolei", data[2] * 0.00000001, "CITYL", "memo"],
              "id": 10
            }),
          },
        };
        console.log('payload!!!====', payload)
        // 发起异步请求
        let response = yield fetch(requestOption.url, requestOption.body);
        // 根据返回数据，渲染结果
        response = yield response.text();
        console.log('response====', response);
        yield  put({type: 'saveResult', payload: {txHash: payload.result[0],number: data[2]}});
        if (response) {
          router.push('/result/success');
          //yield put({ type: 'fetchAccountNumber', data: response});
        } else {
          router.push('/result/fail');
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
        console.log('payload====', payload)
        // 发起异步请求
        const response = yield call(request, requestOption);
        // 根据返回数据，渲染结果
        console.log('response====', response)
        if (response) {

          yield put({type: 'fetchBuy', data: response});

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
