import React from "react"
import PropTypes from "prop-types"

export const Spotify = ({ id, width = 320, height = 380 }) => (
  // TODO allow for height and width props
  <iframe
    title={`spotify-${id}`}
    src={`https://open.spotify.com/embed/${id}`}
    width={width}
    height={height}
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
  />
)

Spotify.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.number,
}
