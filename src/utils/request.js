import 'whatwg-fetch';
//import service from 'utils/service';
//import { storage } from 'utils/storage';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
   return response.json();
  //return response;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function errorResponse(error) {
  const response = {
    status: 1006,
    errorMsg: error,
  };
  return response;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * 重要的是这里的options的格式；
 * @param  options = { url: '', body:  {} };
 *
 * @return {object}           The response data
 */
export default function request(options) {
  const intactUrl = options.url;

  let option = {
    ...options.body,
    //credentials: 'include',
    //mode : 'opaque',
    //withCredentials: true,
    //crossDomain: true,
    //headers: {
    //  "Content-Type" : "application/json"
    //}
  };
  //const jwt = storage.getLoginUserToken();
  //console.log("jwt : ",jwt)
  //if(jwt){
  //  option.headers.Authorization =  "Bearer " +jwt
  //  //option.headers.Authorization =  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Mjg5NzA0NzYsIm9yaWdfaWF0IjoxNTI2Mzc4NDc2LCJ1aWQiOjYyMDV9.Au1YmLq1D1bH7hKo3ykTVm8Er6-te7PT3mVdhSfy6P4"
  //}
  return fetch(intactUrl, option)
    .then(checkStatus)
    .then(parseJSON)
    .catch(errorResponse);
}
