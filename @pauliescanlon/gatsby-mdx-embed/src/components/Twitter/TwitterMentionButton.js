import React, { Fragment } from "react"
import PropTypes from "prop-types"

export const TwitterMentionButton = ({ username, size }) => {
  return (
    <Fragment>
      <a
        href={`https://twitter.com/intent/tweet?screen_name=${username}&ref_src=twsrc%5Etfw`}
        className="twitter-mention-button"
        data-size={size}
      >{`Tweet to @${username}`}</a>
    </Fragment>
  )
}

TwitterMentionButton.propTypes = {
  /**
   * Twitter username
   */
  username: PropTypes.string.isRequired,
  /**
   * The size of the button
   */
  size: PropTypes.oneOf(["large", "small"]),
}

TwitterMentionButton.defaultProps = {
  size: "small",
}
