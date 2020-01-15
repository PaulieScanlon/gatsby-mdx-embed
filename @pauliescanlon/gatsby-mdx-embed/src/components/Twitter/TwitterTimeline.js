import React from "react"
import PropTypes from "prop-types"

export const TwitterTimeline = ({
  username,
  theme,
  showLikes,
  width,
  height,
}) => {
  return (
    <div style={{ overflow: "auto" }}>
      <a
        className="twitter-timeline"
        data-theme={theme}
        data-width={width}
        data-height={height}
        href={`https://twitter.com/${username}${
          showLikes ? `/likes` : ""
        }?ref_src=twsrc%5Etfw`}
      >
        {`Tweets by @${username}`}
      </a>
    </div>
  )
}

TwitterTimeline.propTypes = {
  /**
   * Twitter username
   */
  username: PropTypes.string.isRequired,
  /**
   * Show Tweets liked bythe username
   */
  showLikes: PropTypes.string,
  /**
   * Color theme of the Timeline
   */
  theme: PropTypes.oneOf(["light", "dark"]),
  /**
   * Width for the iFrame
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Height for the iFrame. Null is full height
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

TwitterTimeline.defaultProps = {
  theme: "light",
  showLikes: null,
  width: "498px",
  height: null,
}
