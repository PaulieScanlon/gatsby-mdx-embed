import React, { Fragment } from "react"
import PropTypes from "prop-types"

export const Tweet = ({ id }) => (
  <Fragment>
    {/* <blockquote className="twitter-tweet">
      <a href={`https://twitter.com/${id}`}>
        {typeof window !== "undefined" && !window.twttr ? "Error Loading" : ""}
      </a>
    </blockquote> */}
    <blockquote class="twitter-tweet">
      <a href="https://twitter.com/PaulieScanlon/status/1201514996838141952?ref_src=twsrc%5Etfw">
        ....
      </a>
    </blockquote>
  </Fragment>
)

Tweet.propTypes = {
  id: PropTypes.string.isRequired,
}
