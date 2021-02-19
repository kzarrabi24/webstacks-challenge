import React from 'react'
import Button from './Button';
import { BannerText, MediumText } from './ReusableComponents';

import styled from 'styled-components';

const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  @media(min-width: 1200px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const WrapperStyle = styled(Wrapper)`
  color: #fff;
  width: 250px;
  @media(min-width: 992px) {
    width: 470px;
  }
`;

const ButtonWrapper = styled(Wrapper)`
display: flex;
flex-wrap: wrap;
  a {
    margin-bottom: 10px;
  }
  a:first-of-type {
    margin-right: 24px;
  }
`

const Title = styled(BannerText)`
  font-weight: bold;
  padding-bottom: 24px;
`

const TopTag = styled(MediumText)`
  text-transform: uppercase;
  font-weight: 700;
  padding-bottom: 16px;
`

const BottomTag = styled(MediumText)`
  padding-bottom: 28px;
`

export default ({ cta }) => (
  <div>
      <WrapperStyle>
        <TopTag>{cta.topTagLine}</TopTag>
        <Title>{cta.title}</Title>
        <BottomTag>{cta.bottomTagLine}</BottomTag>
      </WrapperStyle>
      <ButtonWrapper>
          <Button target="/" variant="primary" icon>Get started</Button>
          <Button target="/" variant="secondary" icon>Request a demo</Button>
      </ButtonWrapper>
  </div>
)
