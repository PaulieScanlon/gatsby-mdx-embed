import React, { Fragment, useEffect, useState } from "react"
import PropTypes from "prop-types"

import { createScriptTag, createStyleSheet } from "../../utils"

export const Gist = ({ gistLink }) => {
  const [gistResponse, setGistResponse] = useState({
    isLoading: true,
    div: "",
    files: "",
  })

  const root = `https://gist.github.com/`
  const gistId = gistLink.split("/")[1]
  const gistEmbedScript = `${root}${gistLink}.json?callback=gist_callback_${gistId}`

  useEffect(() => {
    window[`gist_callback_${gistId}`] = gist => {
      createStyleSheet(gist.stylesheet)
      setGistResponse({
        isLoading: false,
        div: gist.div,
        files: gist.files[0],
      })
    }
    createScriptTag(gistEmbedScript, null)
  }, [gistId, gistEmbedScript])

  return (
    !gistResponse.isLoading && (
      <Fragment>
        <div className="gist gist-file">
          <div className="gist-meta">
            <a href={`${root}/${gistLink}`}>{gistResponse.files}</a>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: gistResponse.div }} />
      </Fragment>
    )
  )
}

Gist.propTypes = {
  /**
   * Gist link
   */
  gistLink: PropTypes.string.isRequired,
}
