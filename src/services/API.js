/* eslint-disable space-in-parens */
import fetch from 'isomorphic-fetch';

const API = {
  getUser(target) {
    const url = `https://api.github.com/search/users?q=${target}`;
    return fetch(url)
      .then( response => response.json() )
      .catch( error => ({ error }) );
  },

  getUserDetail(target) {
    const url = `https://api.github.com/users/${target}`;
    return fetch(url)
      .then( response => response.json() )
      .catch( error => ({ error }) );
  },

  getRepo(target) {
    const url = `https://api.github.com/users/${target}/repos`;
    return fetch(url)
      .then( response => response.json() )
      .catch( error => ({ error }) );
  },
};

export default API;
