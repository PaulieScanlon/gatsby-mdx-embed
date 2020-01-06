import React from "react"
import PropTypes from "prop-types"

export const Flickr = ({ id }) => (
  <span
    className="flickr-embed-mdx"
    data-flickr-embed="true"
    data-header="true"
    data-footer="true"
  >
    <img
      src={`https://live.staticflickr.com/${id}`}
      width="100%"
      height="auto"
      alt={id}
    />
  </span>
)

Flickr.propTypes = {
  /**
   * Flickr id
   */
  id: PropTypes.string.isRequired,
}
