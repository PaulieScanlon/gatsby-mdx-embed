import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet-async"

import { useDbQuery } from "gatsby-theme-docz/src/hooks/useDbQuery"

const SEO = ({ description, lang, meta, keywords, title: initialTitle }) => {
  const db = useDbQuery()
  const title = initialTitle || db.config.title
  const metaDescription = description || db.config.description
  const base = db.config.base
  const ogImage = db.config.ogImage

  const imagePath = `${base}images/${ogImage}`
  const favIcon = `${base}images/favicon-32x32.png`

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${db.config.title}`}
      htmlAttributes={{ lang }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `image`,
          content: imagePath,
        },
        {
          property: `image:alt`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: imagePath,
        },
        {
          property: `og:image:alt`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: imagePath,
        },
        {
          property: `twitter:image:alt`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      <link rel="icon" type="image/png" href={`${favIcon}`}></link>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
