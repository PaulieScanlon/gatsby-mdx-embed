import React, { Fragment } from "react"
import PropTypes from "prop-types"

export const TwitterHashtagButton = ({ hashtag, size }) => {
  return (
    <Fragment>
      <a
        href={`https://twitter.com/intent/tweet?button_hashtag=${hashtag}&ref_src=twsrc%5Etfw`}
        className="twitter-hashtag-button"
        data-size={size}
      >{`Tweet #${hashtag}`}</a>
    </Fragment>
  )
}

TwitterHashtagButton.propTypes = {
  /**
   * Twitter hashtag
   */
  hashtag: PropTypes.string.isRequired,
  /**
   * The size of the button
   */
  size: PropTypes.oneOf(["large", "small"]),
}

TwitterHashtagButton.defaultProps = {
  size: "small",
}
