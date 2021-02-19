import React from 'react';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { MediumText, SmallText, LinkSized } from './ReusableComponents';

const Preview = styled.div`
  background-color: #FFFFFF;
  width: 250px;
  max-width: 250px;
  margin-right: 0;
  border-radius: 4px;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;

  @media (min-width: 768px) {
    margin-right: 30px;
    width: 370px;
    max-width: 338px;
    padding-right: 0;
  }
`

const ServiceWrapper= styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 25px;

  @media (min-width: 992px) {
    margin-top: 0;
  }
`

const ServiceTitle= styled(MediumText)`
  color: #000000;
  font-weight: 700;
  align-self: flex-end;
  padding-bottom: 16px;
`

const ShortDescription= styled(SmallText)`
  color: #000000;
  font-weight: 400;
  padding-bottom: 24px;
`

const LearnMore= styled(LinkSized)`
  color: #F65928;
`

export default ({ service }) => (
  <Preview>
      <ServiceWrapper>
        <ServiceTitle>{service.title}</ServiceTitle>
        <Img style={{width: '200px', height: '200px', marginTop: '-76px', left: '40px'}} alt="service" fluid={service.image.fluid} />
      </ServiceWrapper>
    <ShortDescription>{service.shortDescription}</ShortDescription>
    <LearnMore to='/'>Learn more <FontAwesomeIcon icon={faAngleRight}/></LearnMore>
  </Preview>
)
