import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import styles from './Search.css';
import {
  changeInput as changeInputAction,
  fetchUserRequest,
} from './../../actions/index';


class Search extends Component {
  static propTypes = {
    keyword: PropTypes.string.isRequired,
    search: PropTypes.func.isRequired,
    changeInput: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.search = this.search.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(e) {
    e.preventDefault();

    const { value } = e.target;
    const { changeInput } = this.props;
    changeInput(value);
  }

  handleSearch(e) {
    e.preventDefault();

    // Hit 'Enter'
    if (e.keyCode === 13) {
      this.search();
    }
  }

  search(e = null) {
    if (e) e.preventDefault();
    const { search, keyword } = this.props;

    // Back to the dashboard b4 search
    browserHistory.push('/');

    search(keyword);
  }

  render() {
    const { keyword } = this.props;

    return (
      <div className={styles.container}>

        <section className={styles.logo}>
          <Link
            className={styles.logo_text}
            to={'/'}
          >
            <div className={styles.logo_text}>
              GitHub Searcher
            </div>
          </Link>

          <div className={styles.source_code}>
            view &nbsp;
            <a
              href="https://github.com/oopDaniel/Github-searcher"
              className={styles.source_code_link}
            >
              source code
            </a>
          </div>
        </section>

        <section className={styles.searchbar_container}>
          <input
            value={keyword}
            type="text"
            className={styles.searchbar}
            onKeyUp={this.handleSearch}
            onChange={this.changeInput}
            placeholder="Enter User ID"
          />
          <button
            className={styles.search_btn}
            onClick={this.search}
          >
            Go!
          </button>
        </section>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  keyword: state.keyword,
});

const connectedSearch = connect(mapStateToProps, {
  changeInput: changeInputAction,
  search: fetchUserRequest,
})(Search);

export default connectedSearch;
