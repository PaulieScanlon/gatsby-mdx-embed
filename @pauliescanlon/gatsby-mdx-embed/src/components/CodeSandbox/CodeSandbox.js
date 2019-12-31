import React from "react"
import PropTypes from "prop-types"

export const CodeSandbox = ({ id }) => (
  <iframe
    title={`codeSandbox-${id}`}
    src={`https://codesandbox.io/embed/${id}`}
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    style={{
      width: "100%",
      height: "500px",
      border: 0,
      borderRadius: "4px",
      overflow: " hidden",
    }}
  />
)

CodeSandbox.propTypes = {
  id: PropTypes.string.isRequired,
}
