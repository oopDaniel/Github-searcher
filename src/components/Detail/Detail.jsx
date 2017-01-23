import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import UserInfo from './UserInfo';
import UserRepos from './UserRepos';
import styles from './Detail.css';
import { fetchUserDetailRequest } from './../../actions/index';


class Detail extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    search: PropTypes.func.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    info: PropTypes.object.isRequired,
    repos: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { search } = this.props;
    const { id } = this.props.params;
    search(id);
  }

  render() {
    const { info, repos, isFetching } = this.props;

    if (isFetching) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <UserInfo info={info} />
        <UserRepos repos={repos} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  info: state.detail.info,
  repos: state.detail.repos,
});

const connectedDetail = connect(mapStateToProps, {
  search: fetchUserDetailRequest,
})(Detail);


export default connectedDetail;
