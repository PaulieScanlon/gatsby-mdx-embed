import React, { Fragment } from "react"
import PropTypes from "prop-types"

export const TwitterMentionButton = ({ username }) => {
  return (
    <Fragment>
      <a
        href={`https://twitter.com/intent/tweet?screen_name=${username}&ref_src=twsrc%5Etfw`}
        className="twitter-mention-button"
        // data-show-count={true}
      >{`Tweet to @${username}`}</a>
    </Fragment>
  )
}

TwitterMentionButton.propTypes = {
  /**
   * Twitter username
   */
  username: PropTypes.string.isRequired,
}

TwitterMentionButton.defaultProps = {}
