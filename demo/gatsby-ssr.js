const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([
    <meta
      key="viewport"
      name="viewport"
      content="width=device-width, initial-scale=1"
    />,
    <link
      key="stylesheet"
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css"
    />,
    <style key="css" type="text/css">
      {`
            .markdown-body {
                box-sizing: border-box;
                min-width: 320px;
                max-width: 940px;
                margin: 0 auto;
                padding: 16px;
            }
        
            @media (max-width: 767px) {
                .markdown-body {
                    padding: 15px;
                }
            }
            `}
    </style>,
  ])
}
