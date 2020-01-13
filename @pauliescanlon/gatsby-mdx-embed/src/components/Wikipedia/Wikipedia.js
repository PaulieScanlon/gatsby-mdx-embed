import React, { Fragment, useEffect, useState } from "react"

import PropTypes from "prop-types"

export const Wikipedia = ({ id, height }) => {
  const [wikiResponse, setWikiResponse] = useState({
    isLoading: true,
    hasError: false,
    body: "",
  })

  const wikipediaEmbedUrl = `https://en.wikipedia.org/api/rest_v1/page/html/${id}`

  useEffect(() => {
    fetch(wikipediaEmbedUrl)
      .then(response => response.text())
      .then(response => {
        if (response) {
          setWikiResponse({
            isLoading: false,
            hasError: false,
            body: response.replace(
              /<a rel="mw:WikiLink"/g,
              '<a target="_blank" rel="mw:WikiLink"'
            ),
          })
        }

        if (!response) {
          setWikiResponse({
            isLoading: false,
            hasError: true,
          })
        }
      })
  }, [wikipediaEmbedUrl])

  return (
    !wikiResponse.isLoading && (
      <Fragment>
        <iframe
          title={id}
          frameBorder="0"
          border="0"
          style={{
            width: "100%",
            minHeight: height,
          }}
          srcDoc={wikiResponse.body}
        />
      </Fragment>
    )
  )
}

Wikipedia.propTypes = {
  /**
   * Wikipedia page id
   */
  id: PropTypes.string.isRequired,
  /**
   * Height for the iFrame
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Wikipedia.defaultProps = {
  height: 600,
}
