import React from "react"
import PropTypes from "prop-types"

import { getPadding } from "../../utils"

export const YouTube = ({ id, aspectRatio }) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      ...getPadding(aspectRatio),
    }}
  >
    <iframe
      title={`youTube-${id}`}
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  </div>
)

YouTube.propTypes = {
  /**
   * YouTube id
   */
  id: PropTypes.string.isRequired,
  /**
   * Aspect ratio of YouTube video
   */
  aspectRatio: PropTypes.oneOf(["1:1", "16:9", "4:3", "3:2", "8:5"]),
}

YouTube.defaultProps = {
  aspectRatio: "16:9",
}
