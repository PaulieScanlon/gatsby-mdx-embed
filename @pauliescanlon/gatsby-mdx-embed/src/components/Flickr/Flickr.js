import React, { Fragment } from "react"
import PropTypes from "prop-types"

export const Flickr = ({ id }) => (
  <Fragment>
    <a data-flickr-embed="true" data-header="true" data-footer="true">
      {typeof window !== "undefined" && !window.FlickrEmbedr ? (
        <blockquote>
          <a href={`https://live.staticflickr.com/${id}`}>Error Loading</a>
        </blockquote>
      ) : (
        <img
          src={`https://live.staticflickr.com/${id}`}
          width="100%"
          height="auto"
          alt={id}
        />
      )}
    </a>
  </Fragment>
)

Flickr.propTypes = {
  id: PropTypes.string.isRequired,
}
