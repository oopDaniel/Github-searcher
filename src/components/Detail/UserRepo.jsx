import React, { PropTypes } from 'react';

import styles from './UserRepo.css';


const propTypes = {
  repo: PropTypes.shape({
    err: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.number,
      html_url: PropTypes.string,
    })).isRequired,
  }).isRequired,
};

const UserRepo = ({ repo }) => {
  if (repo.err) {
    return <span>{repo.err}</span>;
  }

  const { data } = repo;
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

UserRepo.propTypes = propTypes;


export default UserRepo;
