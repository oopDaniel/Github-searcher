import React, { PropTypes } from 'react';

import styles from './UserInfo.css';

const propTypes = {
  info: PropTypes.shape({
    err: PropTypes.string.isRequired,
    data: PropTypes.shape({
      name: PropTypes.string,
      login: PropTypes.string,
      avatar_url: PropTypes.string,
      location: PropTypes.string,
      company: PropTypes.string,
      email: PropTypes.string,
      created_at: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

const UserInfo = ({ info }) => {
  if (info.err) {
    return <span>{info.err}</span>;
  }

  const { data } = info;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{data.name || data.login}</div>
      <section className={styles.content}>
        <figure className={styles.figure}>
          <img
            className={styles.avatar}
            src={data.avatar_url}
            alt={`Avatar for ${data.login}`}
          />
          <a
            className={styles.link}
            href={`https://github.com/${data.login}`}
          >
            View me on GitHub
          </a>
        </figure>
        <section className={styles.details}>
          <span className={styles.detail}>
            <b>Username:</b> <span className={styles.details_text}>{data.login}</span>
          </span>
          <span className={styles.detail}>
            <b>Location:</b> <span className={styles.details_text}>{data.location}</span>
          </span>
          <span className={styles.detail}>
            <b>Company:</b> <span className={styles.details_text}>{data.company}</span>
          </span>
          <span className={styles.detail}>
            <b>Email:</b> <span className={styles.details_text}>{data.email}</span>
          </span>
          <span className={styles.detail}>
            <b>Member since:</b> <span className={styles.details_text}>{data.created_at}</span>
          </span>
        </section>
      </section>
    </div>
  );
};

UserInfo.propTypes = propTypes;

export default UserInfo;
