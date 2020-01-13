import React from "react"
import PropTypes from "prop-types"

import { getPadding } from "../../utils"

export const Vimeo = ({ vimeoId, autoPlay, skipTo }) => {
  const { h, m, s } = skipTo

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        ...getPadding("16:9"),
      }}
    >
      <iframe
        title={`vimeo-${vimeoId}`}
        src={`https://player.vimeo.com/video/${vimeoId}?autoplay=${autoPlay}#t=${h}h${m}m${s}s`}
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
}

Vimeo.propTypes = {
  /**
   * Vimeo id
   */
  vimeoId: PropTypes.string.isRequired,
  /**
   * Skip to a time in the video
   */
  skipTo: PropTypes.shape({
    h: PropTypes.number,
    m: PropTypes.number.isRequired,
    s: PropTypes.number.isRequired,
  }),
  /**
   * Auto play the video
   */
  autoPlay: PropTypes.bool,
}

Vimeo.defaultProps = {
  autoPlay: false,
  skipTo: {
    h: 0,
    m: 0,
    s: 0,
  },
}
