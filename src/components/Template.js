import React from 'react';
import './base.css';
import Container from './Container';
import Navigation from './Navigation';
import styled from 'styled-components';
import '@fontsource/inter';

const HomepageBackground = styled.div`
  z-index: -1;
  position: absolute;
  img {
    opacity: 50%;
    display: block;
    filter: brightness(50%);
  }
`

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <HomepageBackground>
          <img alt='Background' src={this.props.homepageBackground} />
        </HomepageBackground>
        <Navigation logo={this.props.logo}/>
        {children}
      </Container>
    )
  }
}

export default Template
