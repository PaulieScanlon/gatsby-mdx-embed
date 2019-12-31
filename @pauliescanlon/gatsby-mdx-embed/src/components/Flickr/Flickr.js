import React, { Fragment } from "react"
import PropTypes from "prop-types"

export const Flickr = ({ id }) => (
  <Fragment>
    {typeof window !== "undefined" && !window.FlickrEmbedr ? (
      <blockquote>
        <a href={`https://live.staticflickr.com/${id}`}>Error Loading</a>
      </blockquote>
    ) : (
      <a
        data-flickr-embed="true"
        data-header="true"
        data-footer="true"
        href={`https://live.staticflickr.com/${id}`}
      >
        <img
          src={`https://live.staticflickr.com/${id}`}
          width="100%"
          height="auto"
          alt={id}
        />
      </a>
    )}
  </Fragment>
)

Flickr.propTypes = {
  id: PropTypes.string.isRequired,
}
