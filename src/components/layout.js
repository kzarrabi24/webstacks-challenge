import React from 'react';
import './base.css';
import Container from './container';
import Navigation from './navigation';
import "@fontsource/inter";

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <div className="homepage-background">
          <img alt="Background" src={this.props.homepageBackground} />
        </div>
        <Navigation logo={this.props.logo}/>
        {children}
      </Container>
    )
  }
}

export default Template
