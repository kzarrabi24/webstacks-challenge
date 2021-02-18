import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import styles from './service.module.css'

export default ({ service }) => (
  <div className={styles.preview}>
      <div className={styles.service}>
        <div className={styles.serviceTitle}>{service.title}</div>
        <Img className={styles.serviceImage} alt="service" fluid={service.image.fluid} />
      </div>
    <div className={styles.shortDescription}>{service.shortDescription}</div>
    <Link className={styles.learnMore} to='/'>Learn more <FontAwesomeIcon icon={faAngleRight}/></Link>
  </div>
)
