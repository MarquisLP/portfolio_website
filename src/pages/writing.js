import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {Tag, ContainerLayout, WorkPost, Category, Intro, SubTitle, Title, Text} from "../components/common"

const WritingIndex = ({ data }) => {
  const works = data.allMarkdownRemark.edges

  return (
    <>
      <Layout> 
        <SEO title="Writing" />
        <Intro>
          <ContainerLayout>

            <SubTitle className="text-dark">
              Writing
            </SubTitle>

            <ContainerLayout className="wrapper">
              {works.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
                return (
                  <WorkPost key={node.fields.slug}>
                    <div className="media">
                      <div className="image-wrapper">
                        <Link to={node.fields.slug}>
                          <Img fluid={node.frontmatter.image.childImageSharp.fluid} title={node.frontmatter.title} />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <header>
                        <Category>{node.frontmatter.category}</Category>
                        <Title>
                          <Link className="text-primary lined-link" style={{ boxShadow: `none` }} to={node.fields.slug}>
                            {title}
                          </Link>
                        </Title>
                      </header>
                        <Text
                          dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                          }}
                        />
                        <div>
                          {node.frontmatter.tags.map((tag, index) => (<Tag key={index}>{tag}</Tag>))}
                        </div>
                    </div>
                  </WorkPost>
                )
              })}
            </ContainerLayout>
          </ContainerLayout>
        </Intro>
      </Layout>
    </>
  )
}

export default WritingIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(works)/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            category
            description
          }
        }
      }
    }
  }
`