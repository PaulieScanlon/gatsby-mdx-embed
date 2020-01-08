import React, { Fragment, useEffect, useState } from "react"
import PropTypes from "prop-types"

import { createScriptTag, createStyleSheet } from "../../utils"

export const Gist = ({ id }) => {
  const [gistResponse, setGistResponse] = useState({
    isLoading: true,
    div: "",
    files: "",
  })

  const root = `https://gist.github.com/`
  const gistId = id.split("/")[1]
  const gistEmbedScript = `${root}${id}.json?callback=gist_callback_${gistId}`

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
            <a href={`${root}/${id}`}>{gistResponse.files}</a>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: gistResponse.div }} />
      </Fragment>
    )
  )
}

Gist.propTypes = {
  /**
   * Gist id
   */
  id: PropTypes.string.isRequired,
}
