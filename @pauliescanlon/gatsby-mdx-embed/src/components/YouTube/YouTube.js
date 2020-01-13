import React from "react"
import PropTypes from "prop-types"

import { getPadding } from "../../utils"

export const YouTube = ({ youTubeId, aspectRatio, autoPlay, skipTo }) => {
  const { h, m, s } = skipTo

  const tH = h * 60
  const tM = m * 60

  const startTime = tH + tM + s

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        ...getPadding(aspectRatio),
      }}
    >
      <iframe
        title={`youTube-${youTubeId}`}
        src={`https://www.youtube.com/embed/${youTubeId}?&autoplay=${autoPlay}&start=${startTime}`}
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
}

YouTube.propTypes = {
  /**
   * YouTube id
   */
  youTubeId: PropTypes.string.isRequired,
  /**
   * Aspect ratio of YouTube video
   */
  aspectRatio: PropTypes.oneOf(["1:1", "16:9", "4:3", "3:2", "8:5"]),
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

YouTube.defaultProps = {
  aspectRatio: "16:9",
  autoPlay: false,
  skipTo: {
    h: 0,
    m: 0,
    s: 0,
  },
}
