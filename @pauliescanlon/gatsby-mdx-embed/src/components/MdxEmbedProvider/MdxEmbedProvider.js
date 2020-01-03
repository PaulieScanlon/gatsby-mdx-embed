import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { CodeSandbox } from "../CodeSandbox"
import { Instagram } from "../Instagram"
import { CodePen } from "../CodePen"
import { Vimeo } from "../Vimeo"
import { Tweet } from "../Twitter"
import { YouTube } from "../YouTube"
import { Spotify } from "../Spotify"
import { Flickr } from "../Flickr"

const components = {
  CodeSandbox: props => <CodeSandbox {...props} />,
  Vimeo: props => <Vimeo {...props} />,
  Tweet: props => <Tweet {...props} />,
  YouTube: props => <YouTube {...props} />,
  Spotify: props => <Spotify {...props} />,
  Flickr: props => <Flickr {...props} />,
  Instagram: props => <Instagram {...props} />,
  CodePen: props => <CodePen {...props} />,
}

export const MdxEmbedProvider = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
