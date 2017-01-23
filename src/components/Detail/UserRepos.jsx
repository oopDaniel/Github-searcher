import React, { PropTypes } from 'react';

import styles from './UserRepos.css';


const propTypes = {
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

const UserRepos = ({ repos }) => {
  if (repos.err) {
    return <span>{repos.err}</span>;
  }

  const { data } = repos;
  return (
    <div className={styles.container}>
      <div className={styles.title}>Repos</div>
      <section className={styles.content}>
        {data.map(project => (
          <a
            href={project.html_url}
            className={styles.row}
            key={project.id}
          >
            <div className={styles.row_name}>{project.name}</div>
            <div className={styles.row_desc}>{project.description}</div>
          </a>
        ))}
      </section>
    </div>
  );
};

UserRepos.propTypes = propTypes;


export default UserRepos;
