import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Template from '../components/Template'
import Service from '../components/Service';
import CallToAction from '../components/CallToAction';
import styled from 'styled-components';

const ServiceList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 112px;

  @media(min-width: 992px) {
    flex-wrap: nowrap;
  }
`

class RootIndex extends React.Component {
  render() {
    const services = get(this, 'props.data.allContentfulService.edges');
    const homepageBackground = get(this, 'props.data.homepageBackground.file.url');
    const cta = get(this, 'props.data.contentfulCallToAction');

    return (
      <Template location={this.props.location} homepageBackground={homepageBackground}>
        <div className="index-content">
            <CallToAction cta={cta}/>
           <div className="wrapper">
            <ServiceList>
              {services.map(({ node }) => {
                return (
                  <div key={node.spaceId}>
                    <Service service={node} />
                  </div>
                )
              })}
            </ServiceList>
          </div>
        </div>
      </Template>
    )
  }
  
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulService(sort: {fields: id, order: ASC}) {
      edges {
        node {
          title
          shortDescription
          spaceId
          image {
            fluid(maxHeight: 200, maxWidth: 200, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  homepageBackground: contentfulAsset(id: {eq: "b4c904cb-58c0-5ae1-8cf4-c6d667c8e422"}) {
    id
    file {
      url
    }
  }
  contentfulCallToAction(id: {eq: "fac59c08-9770-5989-8e60-73915e3f28c1"}) {
    title
    topTagLine
    bottomTagLine
  }
  }
`
