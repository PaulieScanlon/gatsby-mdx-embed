import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"

import { MdxEmbedProivider } from "@pauliescanlon/gatsby-mdx-embed"

import PropTypes from "prop-types"

import Seo from "../components/seo"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query defaultQuery {
          site {
            siteMetadata {
              title
              description
              siteURL
              siteImage
              author
            }
          }
        }
      `}
      render={data => {
        const {
          title,
          description,
          siteImage,
          siteURL,
          author,
        } = data.site.siteMetadata

        return (
          <Fragment>
            <Seo
              lang="eng"
              title={title}
              description={description}
              siteImage={siteImage}
              siteURL={siteURL}
              author={author}
            />
            <MdxEmbedProivider>
              <main className="markdown-body">{children}</main>
            </MdxEmbedProivider>
          </Fragment>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
