import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Service from '../components/service';
import CallToAction from '../components/call-to-action';

class RootIndex extends React.Component {
  render() {
    const services = get(this, 'props.data.allContentfulService.edges');
    const logo = get(this, 'props.data.logo.file.url');
    const homepageBackground = get(this, 'props.data.homepageBackground.file.url');
    const cta = get(this, 'props.data.contentfulCallToAction');

    return (
      <Layout location={this.props.location} logo={logo} homepageBackground={homepageBackground}>
        <div className="index-content">
            <CallToAction cta={cta}/>
           <div className="wrapper">
            <div className="service-list">
              {services.map(({ node }) => {
                return (
                  <div key={node.spaceId}>
                    <Service service={node} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
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
    logo: contentfulAsset(id: {eq: "6638f7fb-5618-59a9-8c2a-c4fdcbedb973"}) {
    id
    file {
      url
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
