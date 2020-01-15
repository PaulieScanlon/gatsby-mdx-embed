import React from "react"
import PropTypes from "prop-types"

export const TwitterList = ({ username, theme, listName, width, height }) => {
  return (
    <div style={{ overflow: "auto" }}>
      <a
        className="twitter-timeline"
        data-theme={theme}
        data-width={width}
        data-height={height}
        href={`https://twitter.com/${username}/lists/${listName}?ref_src=twsrc%5Etfw`}
      >
        {`A Twitter List by @${username}`}
      </a>
    </div>
  )
}

TwitterList.propTypes = {
  /**
   * Twitter username
   */
  username: PropTypes.string.isRequired,
  /**
   * The Twitter list name
   */
  listName: PropTypes.string.isRequired,
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

TwitterList.defaultProps = {
  theme: "light",
  width: "498px",
  height: null,
}

// <a class="twitter-timeline" href="https://twitter.com/TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw">A Twitter List by TwitterDev</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
