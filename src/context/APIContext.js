import React, { createContext } from 'react';
import * as axios from 'axios';
import * as sha256 from 'crypto-js/hmac-sha256';

export const APIContext = createContext();

const APIContextProvider = ({ children }) => {
  let a = axios.create({
    baseURL: 'https://meiteimayek.tk'
  });

  a.interceptors.request.use(
    config => {
      let time = new Date().getTime();
      let token = sha256(config.baseURL + config.url, '' + time);
      return {
        ...config,
        headers: {
          ...config.headers,
          authorization: 'Bearer ' + token,
          'x-timestamp': time
        }
      };
    },
    err => {
      console.log(err);
      new Promise.reject(err);
    }
  );

  return (
    <APIContext.Provider value={{ api: a }}>{children}</APIContext.Provider>
  );
};

export default APIContextProvider;
