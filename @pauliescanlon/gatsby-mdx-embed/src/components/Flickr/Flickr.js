import React, { useState } from "react"
import PropTypes from "prop-types"

export const Flickr = ({ id }) => {
  const [hasImageloaded, setHasImageLoaded] = useState(false)

  return (
    <span
      className="flickr-embed-mdx"
      data-flickr-embed="true"
      data-header="true"
      data-footer="true"
    >
      {typeof window !== "undefined" &&
      !window.FlickrEmbedr &&
      !hasImageloaded ? (
        <blockquote>
          <a href={`https://live.staticflickr.com/${id}`}>Loading</a>
        </blockquote>
      ) : null}
      {/* eslint-disable-next-line */}
      <img
        src={`https://live.staticflickr.com/${id}`}
        width="100%"
        height="auto"
        alt={id}
        onLoad={() => setHasImageLoaded(true)}
      />
    </span>
  )
}

Flickr.propTypes = {
  id: PropTypes.string.isRequired,
}
