import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import styled from 'styled-components';


const LogoWrapper = styled.div`
    margin: auto 0;
    flex: 0 1 36px;
    padding-left: 20px;

    @media (min-width: 992px) {
      padding-left: 0;
    }

    img {
      width: 123.76px;
      height: 24px;
    }

    @media (max-width: 768px) and (orientation: landscape) {
      flex: 0 1 25px;
  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
        logo: contentfulAsset(id: {eq: "6638f7fb-5618-59a9-8c2a-c4fdcbedb973"}) {
          id
          file {
            url
          }
        }
    }
  `)
  
  return (
    <LogoWrapper as={Link} to="/">
      <img src={data.logo.file.url} alt="logo" />
    </LogoWrapper>
  )
}

export default Logo