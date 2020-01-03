import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import { StaticQuery, graphql } from "gatsby"

// import { MdxEmbedProivider } from "@pauliescanlon/gatsby-mdx-embed"

import Seo from "../components/seo"

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
            <Global
              styles={css`
                body {
                  font-family: Merriweather, Georgia, serif;
                }
              `}
            />
            <Seo
              lang="eng"
              title={title}
              description={description}
              siteImage={siteImage}
              siteURL={siteURL}
              author={author}
            />
            {/* <MdxEmbedProivider> */}
            <main
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: 672,
                padding: "24px 16px",
              }}
            >
              {children}
            </main>
            {/* </MdxEmbedProivider> */}
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
