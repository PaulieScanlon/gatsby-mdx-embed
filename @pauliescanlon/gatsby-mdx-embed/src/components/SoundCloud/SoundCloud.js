import React from "react"
import PropTypes from "prop-types"

export const SoundCloud = ({
  soundCloudLink,
  width,
  height,
  autoPlay,
  visual,
  color,
}) => (
  <iframe
    title={`sound-cloud-${soundCloudLink}`}
    width={width}
    height={height}
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/${soundCloudLink}&color=%23${color}&auto_play=${autoPlay}&visual=${visual}`}
  />
)

SoundCloud.propTypes = {
  /**
   * SoundCloud link
   */
  soundCloudLink: PropTypes.string.isRequired,
  /**
   * Auto play audio
   */
  autoPlay: PropTypes.bool,
  /**
   * Show the visual artwork
   */
  visual: PropTypes.bool,
  /**
   * Width for the iFrame
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Height for the iFrame
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The color of the play button without the #
   */
  color: PropTypes.string,
}

SoundCloud.defaultProps = {
  width: "100%",
  height: "auto",
  autoPlay: false,
  visual: false,
}
