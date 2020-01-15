import React, { Fragment } from "react"
import PropTypes from "prop-types"

export const TwitterFollowButton = ({
  username,
  showFollowers,
  showUsername,
  size,
}) => {
  return (
    <Fragment>
      <a
        href={`https://twitter.com/${username}?ref_src=twsrc%5Etfw`}
        className="twitter-follow-button"
        data-show-count={showFollowers}
        data-show-screen-name={showUsername}
        data-size={size}
      >{`Follow @${username}`}</a>
    </Fragment>
  )
}

TwitterFollowButton.propTypes = {
  /**
   * Twitter username
   */
  username: PropTypes.string.isRequired,
  /**
   * Show the follower count
   */
  showFollowers: PropTypes.bool,
  /**
   * Show the username
   */
  showUsername: PropTypes.bool,
  /**
   * The size of the button
   */
  size: PropTypes.oneOf(["large", "small"]),
}

TwitterFollowButton.defaultProps = {
  showFollowers: false,
  showUsername: true,
  size: "small",
}
