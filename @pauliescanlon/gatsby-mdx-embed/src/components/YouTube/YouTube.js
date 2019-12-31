import React from "react"
import PropTypes from "prop-types"

// https://github.com/escaladesports/react-youtube-embed/blob/master/src/index.js
export const YouTube = ({ id }) => (
  <div
    style={{
      position: "relative",
      paddingBottom: "56.25%" /* 16:9 */,
      paddingTop: "25px",
      height: 0,
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
  id: PropTypes.string.isRequired,
}
