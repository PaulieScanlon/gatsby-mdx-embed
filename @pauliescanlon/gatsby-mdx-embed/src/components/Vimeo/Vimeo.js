import React from "react"
import PropTypes from "prop-types"

export const Vimeo = ({ id }) => (
  <div
    style={{
      position: "relative",
      paddingBottom: "56.25%" /* 16:9 */,
      paddingTop: "25px",
      height: 0,
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
  id: PropTypes.string.isRequired,
}
