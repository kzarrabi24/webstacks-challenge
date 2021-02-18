import React from 'react';
import { Link } from 'gatsby';
import styles from './navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


class Navigation extends React.Component {
  render() {
    
    return (
      <nav role="navigation" className={styles.nav}>
        <img alt="Brackets" className={styles.logo} src={this.props.logo}/>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">What's included?</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">Pricing</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">Sign In</Link>
      </li>
      <a href="/" className='primary button'>Get started <FontAwesomeIcon icon={faAngleRight}/></a>
    </ul>
  </nav>
    );
  }
}

export default Navigation;
