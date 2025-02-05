import React, { useState } from 'react';
import NavBarLinks from './NavBarLinks';
import Logo from './Logo';

import styled from 'styled-components';

const Nav = styled.nav`
  height: 10vh;
  display: flex;
  background-color: transparent;
  position: relative;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  z-index: 2;
  align-self: center;
  padding-right: 30px;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    padding-top: 10px;
    padding-right: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #000;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`

const Hamburger = styled.div`
  background-color: #000;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: "rotate(-45deg)";

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: "rotate(-90deg) translate(-10px, 0px)";
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: "rotate(90deg)";
    top: 10px;
  }
`

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Nav>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <Hamburger open={navbarOpen} />
      </Toggle>
      <Navbox open={ navbarOpen }>
        <NavBarLinks />
      </Navbox>
    </Nav>
  )
}

export default Navigation
