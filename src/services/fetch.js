import fetch from 'isomorphic-fetch';

export default function throwableFetch(url, options = {}) {
  return fetch(url, options)
    .then((res) => {
      const isValid = res.status >= 200 && res.status < 300;
      if (isValid) {
        return Promise.resolve(res);
      }

      const error = new Error(res.statusText || res.status);
      error.res = res;

      return Promise.reject(error);
    });
}
