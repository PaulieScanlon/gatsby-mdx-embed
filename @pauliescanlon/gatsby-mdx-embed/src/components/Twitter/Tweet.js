import React from "react"
import PropTypes from "prop-types"

export const Tweet = ({ id, theme, align }) => {
  return (
    <div style={{ overflow: "auto" }}>
      <blockquote className="twitter-tweet" data-theme={theme} align={align}>
        <a href={`https://twitter.com/${id}?ref_src=twsrc%5Etfw`}>
          {typeof window !== "undefined" && !window.twttr ? "Loading" : ""}
        </a>
      </blockquote>
    </div>
  )
}

Tweet.propTypes = {
  /**
   * Tweet id
   */
  id: PropTypes.string.isRequired,
  /**
   * Color theme of Tweet
   */
  theme: PropTypes.oneOf(["light", "dark"]),
  /**
   * Alignment of Tweet
   */
  align: PropTypes.oneOf(["left", "center", "right"]),
}

Tweet.defaultProps = {
  theme: "light",
  align: "left",
}
