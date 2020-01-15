import React from "react"
import PropTypes from "prop-types"

export const Tweet = ({ tweetLink, theme, align }) => {
  return (
    <div style={{ overflow: "auto" }}>
      <blockquote className="twitter-tweet" data-theme={theme} align={align}>
        <a href={`https://twitter.com/${tweetLink}?ref_src=twsrc%5Etfw`}>
          {typeof window !== "undefined" && !window.twttr ? "Loading" : ""}
        </a>
      </blockquote>
    </div>
  )
}

Tweet.propTypes = {
  /**
   * Tweet link
   */
  tweetLink: PropTypes.string.isRequired,
  /**
   * Color theme of the Tweet
   */
  theme: PropTypes.oneOf(["light", "dark"]),
  /**
   * Alignment of the Tweet
   */
  align: PropTypes.oneOf(["left", "center", "right"]),
}

Tweet.defaultProps = {
  theme: "light",
  align: "left",
}
