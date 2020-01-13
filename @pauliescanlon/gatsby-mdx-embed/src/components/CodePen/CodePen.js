import React from "react"
import PropTypes from "prop-types"

export const CodePen = ({ codePenId, height, tabs }) => (
  <iframe
    title={`codePen-${codePenId}`}
    height={height}
    style={{
      width: "100%",
    }}
    scrolling="no"
    src={`https://codepen.io/team/codepen/embed/${codePenId}?height=265&theme-id=default&default-tab=${tabs}`}
    frameBorder="no"
    allowtransparency="true"
    allowFullScreen
  />
)

CodePen.propTypes = {
  /**
   * CodePen id
   */
  codePenId: PropTypes.string.isRequired,
  /**
   * Height for the iFrame
   */
  height: PropTypes.number,
  /**
   * Which tabs to display
   */
  tabs: PropTypes.arrayOf(
    PropTypes.oneOf(["js", "css", "scss", "less", "result"])
  ),
}

CodePen.defaultProps = {
  height: 500,
  tabs: ["result"],
}
