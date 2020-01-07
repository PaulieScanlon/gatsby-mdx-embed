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
import { SoundCloud } from "../SoundCloud"

const components = {
  CodePen: props => <CodePen {...props} />,
  CodeSandbox: props => <CodeSandbox {...props} />,
  Flickr: props => <Flickr {...props} />,
  Vimeo: props => <Vimeo {...props} />,
  Tweet: props => <Tweet {...props} />,
  YouTube: props => <YouTube {...props} />,
  Spotify: props => <Spotify {...props} />,
  Instagram: props => <Instagram {...props} />,
  SoundCloud: props => <SoundCloud {...props} />,
}

export const MdxEmbedProvider = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
