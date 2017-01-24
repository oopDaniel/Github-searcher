import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './UserRepos.css';


const propTypes = {
  user: PropTypes.string.isRequired,
  repos: PropTypes.shape({
    err: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.number,
      html_url: PropTypes.string,
    })).isRequired,
  }).isRequired,
};

const UserRepos = ({ repos, user }) => {
  if (repos.err) {
    return <span>{repos.err}</span>;
  }

  const { data } = repos;
  return (
    <div className={styles.container}>
      <div className={styles.title}>Repos</div>
      <section className={styles.content}>
        {data.map(project => (
          <Link
            key={project.id}
            className={styles.row}
            to={`/detail/${user}/${project.name}`}
          >
            <div className={styles.row_name}>{project.name}</div>
            <div className={styles.row_desc}>{project.description}</div>
          </Link>
        ))}
      </section>
    </div>
  );
};

UserRepos.propTypes = propTypes;


export default UserRepos;
