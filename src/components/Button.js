import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Icon = () => <FontAwesomeIcon icon={faAngleRight} />;

function Button(props) {
  const [variant] = useState(props.variant);
  const iconChildren = [' '];
  
  props.icon && iconChildren.push(<Icon />);

  return (
    <Link to="/" className={`button ${variant}`}>
      {props.children}
      {iconChildren}
    </Link>
  );
}
export default Button;