import React from "react"
import PropTypes from "prop-types"

import { getPadding } from "../../utils"

export const Vimeo = ({ id, aspectRatio }) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      ...getPadding(aspectRatio),
    }}
  >
    <iframe
      title={`vimeo-${id}`}
      src={`https://player.vimeo.com/video/${id}`}
      frameBorder="0"
      allow="autoplay; fullscreen"
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

Vimeo.propTypes = {
  /**
   * Vimeo id
   */
  id: PropTypes.string.isRequired,
  /**
   * Aspect ratio of Vimeo video
   */
  // aspectRatio: PropTypes.oneOf(["1:1", "16:9", "4:3", "3:2", "8:5"]),
}

Vimeo.defaultProps = {
  aspectRatio: "16:9",
}
