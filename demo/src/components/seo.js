import React from "react"
import Helmet from "react-helmet"

import PropTypes from "prop-types"

const Seo = ({ lang, title, description, siteURL, siteImage, author }) => {
  return (
    <Helmet title={title}>
      <html lang={lang} />
      <meta name="description" content={description} />
      <meta name="image" content={`${siteURL}/${siteImage}`} />
      <meta name="image:alt" content={description} />

      {/* Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:url" content={siteURL} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteURL}/${siteImage}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={description} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={siteURL} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteURL}/${siteImage}`} />
      <meta name="twitter:image:alt" content={description}></meta>
      <meta name="twitter:creator" content={author}></meta>
    </Helmet>
  )
}

Seo.propTypes = {
  lang: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  siteURL: PropTypes.string.isRequired,
  siteImage: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Seo
