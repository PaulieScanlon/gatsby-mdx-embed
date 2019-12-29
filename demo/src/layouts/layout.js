import React, { Fragment } from "react"
import { StaticQuery, graphql, Link } from "gatsby"

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
            <nav>
              <MdxRoutes>
                {routes => (
                  <ul>
                    {routes.map((route, index) => (
                      <li key={index}>
                        <Link to={route.slug}>{route.navigationLabel}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </MdxRoutes>
            </nav>
            <main>{children}</main>
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
