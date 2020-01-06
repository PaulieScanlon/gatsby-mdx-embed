import React, { Fragment } from "react"
import PropTypes from "prop-types"

export const Instagram = ({ id, caption }) => {
  // TODO
  //  const attr = () => (caption ? "data-instgrm-captioned" : "")

  return (
    <Fragment>
      <blockquote className="instagram-media" data-instgrm-version="12">
        <a href={`https://instagram.com/p/${id}`}>
          {typeof window !== "undefined" && !window.instgrm ? "Loading" : ""}
        </a>
      </blockquote>
    </Fragment>
  )
}

Instagram.propTypes = {
  /**
   * Instagram id
   */
  id: PropTypes.string.isRequired,
  /**
   * Not in use
   */
  // caption: PropTypes.bool,
}
