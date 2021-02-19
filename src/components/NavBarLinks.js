import React from 'react';
import Button from './Button';

import { LinkSized } from './ReusableComponents';

import styled from 'styled-components';

const ButtonNav = styled(Button)`
  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled(LinkSized)`
  color: #FFFFFF;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;

    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">What's Included</NavItem>
      <NavItem to="/404">Pricing</NavItem>
      <NavItem to="/">Sign In</NavItem>
      <ButtonNav to="/" variant="primary" icon>Get started</ButtonNav>
    </>
  )
}

export default NavbarLinks