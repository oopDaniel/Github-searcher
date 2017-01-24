import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router';

import {
  fetchReadmeRequest,
  clearReadme as clearReadmeAction,
} from './../../actions/index';
import Loading from './../Shared/Loading/Loading';
import styles from './Readme.css';


class Readme extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    fetchReadme: PropTypes.func.isRequired,
    clearReadme: PropTypes.func.isRequired,
    readme: PropTypes.shape({
      data: PropTypes.string,
      err: PropTypes.object,
    }).isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      repo: PropTypes.string.isRequired,
    }).isRequired,
  };


  componentWillMount() {
    const { fetchReadme, params } = this.props;
    const { id, repo } = params;
    fetchReadme(id, repo);
  }

  componentWillUnmount() {
    const { clearReadme } = this.props;
    clearReadme();
  }

  render() {
    const { params, readme, isFetching } = this.props;
    if (isFetching) return <Loading />;

    const { id, repo } = params;
    const { data, err } = readme;

    const is404  = err && err.res && err.res.status === 404;
    const errMsg = is404
      ? '# (No *README* provided)'
      : (err && err.message) || '';
    const source = err ? errMsg : atob(data);

    return (
      <div className={styles.container}>
        <div className={styles.title}>{repo}</div>
        <section className={styles.content}>
          <ReactMarkdown source={source} />
          <footer className={styles.footer}>
            <a
              className={styles.link}
              href={`https://github.com/${id}/${repo}`}
            >
              <button className={styles.btn}>Source Code</button>
            </a>
            <Link
              className={styles.link}
              to={`/detail/${id}`}
            >
              <button className={styles.btn}>Back</button>
            </Link>
          </footer>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  readme: state.readme,
});

const connectedReadme = connect(mapStateToProps, {
  fetchReadme: fetchReadmeRequest,
  clearReadme: clearReadmeAction,
})(Readme);

export default connectedReadme;
