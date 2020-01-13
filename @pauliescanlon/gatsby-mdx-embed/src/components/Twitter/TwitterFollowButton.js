import React, { Fragment } from "react"
import PropTypes from "prop-types"

export const TwitterFollowButton = ({ username, showFollowers }) => {
  return (
    <Fragment>
      <a
        href={`https://twitter.com/${username}?ref_src=twsrc%5Etfw`}
        className="twitter-follow-button"
        data-show-count={showFollowers}
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
}

TwitterFollowButton.defaultProps = {
  showFollowers: false,
}
