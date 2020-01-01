import React from "react"
import PropTypes from "prop-types"

export const CodePen = ({ id, height = 500, tabs = ["result"] }) => (
  <iframe
    title={`codePen-${id}`}
    height={height}
    style={{
      width: "100%",
    }}
    scrolling="no"
    src={`https://codepen.io/team/codepen/embed/${id}?height=265&theme-id=default&default-tab=${tabs}`}
    frameBorder="no"
    allowtransparency="true"
    allowFullScreen
  />
)

CodePen.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.oneOf(["js", "css", "scss", "less", "result"])
  ),
}
