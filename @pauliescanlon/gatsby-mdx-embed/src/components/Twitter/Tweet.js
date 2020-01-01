import React, { Fragment } from "react"
import PropTypes from "prop-types"

export const Tweet = ({ id }) => {
  return (
    <Fragment>
      <blockquote className="twitter-tweet">
        <a href={`https://twitter.com/${id}?ref_src=twsrc%5Etfw`}>
          {typeof window !== "undefined" && !window.twttr ? "Loading" : ""}
        </a>
      </blockquote>
    </Fragment>
  )
}

Tweet.propTypes = {
  id: PropTypes.string.isRequired,
}
