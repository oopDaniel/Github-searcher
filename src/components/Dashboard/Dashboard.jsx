import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import styles from './Dashboard.css';


const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  result: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.number,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  })).isRequired,
};

const Dashboard = ({ result, isFetching }) => {
  if (isFetching) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {result.map(user => (
        <figure
          key={user.id}
          className={styles.item}
        >
          <Link to={`/detail/${user.login}`}>
            <img
              src={user.avatar_url}
              alt={`Avatar for ${user.login}`}
            />
          </Link>
          <div className={styles.name}>{user.login}</div>
        </figure>
      ))}
    </div>
  );
};

Dashboard.propTypes = propTypes;

const mapStateToProps = state => ({
  result: state.result,
  isFetching: state.isFetching,
});

const connectedDashboard = connect(mapStateToProps, null)(Dashboard);


export default connectedDashboard;
