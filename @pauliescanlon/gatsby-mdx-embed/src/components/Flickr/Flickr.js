import React from "react"
import PropTypes from "prop-types"

export const Flickr = ({ flickrLink }) => (
  <span
    className="flickr-embed-mdx"
    data-flickr-embed="true"
    data-header="true"
    data-footer="true"
  >
    <img
      src={`https://live.staticflickr.com/${flickrLink}`}
      width="100%"
      height="auto"
      alt={flickrLink}
    />
  </span>
)

Flickr.propTypes = {
  /**
   * Flickr image link
   */
  flickrLink: PropTypes.string.isRequired,
}
