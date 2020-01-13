import React from "react"
import PropTypes from "prop-types"

export const CodeSandbox = ({ codeSandboxId }) => (
  <iframe
    title={`codeSandbox-${codeSandboxId}`}
    src={`https://codesandbox.io/embed/${codeSandboxId}`}
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
  /**
   * CodeSandbox id
   */
  codeSandboxId: PropTypes.string.isRequired,
}
