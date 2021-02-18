import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';

import styles from './call-to-action.module.css'

export default ({ cta }) => (
  <div>
      <div className={styles.textWrapper}>
        <div className={styles.topTagLine}>{cta.topTagLine}</div>
        <div className={styles.title}>{cta.title}</div>
        <p className={styles.bottomTagLine}>{cta.bottomTagLine}</p>
      </div>
      <div className={styles.buttonWrapper}>
          <Button href="/" variant="primary" >Get started <FontAwesomeIcon icon={faAngleRight}/></Button>
          <Button href="/" variant="secondary">Request a demo <FontAwesomeIcon icon={faAngleRight}/></Button>
      </div>
  </div>
)
