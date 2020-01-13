import React from "react"
import PropTypes from "prop-types"

import { getPadding } from "../../utils"

export const Twitch = ({ twitchId, autoPlay, skipTo }) => {
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
        title={`twitch-${twitchId}`}
        src={`https://player.twitch.tv/?autoplay=${autoPlay}&t=${h}h${m}m${s}s&video=v${twitchId}`}
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

Twitch.propTypes = {
  /**
   * Twitch id
   */
  twitchId: PropTypes.string.isRequired,
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

Twitch.defaultProps = {
  autoPlay: false,
  skipTo: {
    h: 0,
    m: 0,
    s: 0,
  },
}
