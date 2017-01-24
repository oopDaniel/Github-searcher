/* eslint-disable space-in-parens */

/* ***************************
 *
 *    Suppress the error handling
 *    so that saga can catch correctly
 *
 *
**/

import fetch from './fetch';

const API = {
  getUser(target) {
    const url = `https://api.github.com/search/users?q=${target}`;
    return fetch(url)
      .then( response => response.json() );
  },

  getUserDetail(target) {
    const url = `https://api.github.com/users/${target}`;
    return fetch(url)
      .then( response => response.json() );
  },

  getRepos(target) {
    const url = `https://api.github.com/users/${target}/repos`;
    return fetch(url)
      .then( response => response.json() );
  },
  getReadme(user, repo) {
    const url = `https://api.github.com/repos/${user}/${repo}/readme`;
    return fetch(url)
      .then( response => response.json() );
  },
};

export default API;
