import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import UserInfo from './UserInfo';
import UserRepo from './UserRepo';
import styles from './Detail.css';
import { fetchUserDetailRequest } from './../../actions/index';


class Detail extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    info: PropTypes.object.isRequired,
    repo: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { search } = this.props;
    const { id } = this.props.params;
    search(id);
  }

  render() {
    const { info, repo } = this.props;
    return (
      <div className={styles.container}>
        <UserInfo info={info} />
        <UserRepo repo={repo} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  info: state.detail.info,
  repo: state.detail.repo,
});

const connectedDetail = connect(mapStateToProps, {
  search: fetchUserDetailRequest,
})(Detail);


export default connectedDetail;
