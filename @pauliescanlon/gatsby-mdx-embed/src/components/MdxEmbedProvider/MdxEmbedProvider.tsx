import { MDXProvider } from '@mdx-js/react'
import React, { FunctionComponent } from 'react'
import { CodePen } from '../CodePen'
import { CodeSandbox } from '../CodeSandbox'
import { EggheadLesson } from '../Egghead'
import { Flickr } from '../Flickr'
import { Gist } from '../Gist'
import { Instagram } from '../Instagram'
import { Pin, PinterestBoard, PinterestFollowButton } from '../Pinterest'
import { SoundCloud } from '../SoundCloud'
import { Spotify } from '../Spotify'
import { Strava } from '../Strava'
import { TikTok } from '../TikTok'
import { Twitch } from '../Twitch'
import {
  Tweet,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterList,
  TwitterMentionButton,
  TwitterTimeline
} from '../Twitter'
import { Vimeo } from '../Vimeo'
import { Wikipedia } from '../Wikipedia'
import { YouTube } from '../YouTube'
import { Buzzprout } from '../Buzzprout'

const components = {
  CodePen,
  CodeSandbox,
  Flickr,
  Gist,
  Instagram,
  Pin,
  PinterestBoard,
  PinterestFollowButton,
  SoundCloud,
  Spotify,
  Strava,
  TikTok,
  Twitch,
  Tweet,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterList,
  TwitterMentionButton,
  TwitterTimeline,
  Vimeo,
  Wikipedia,
  YouTube,
  EggheadLesson,
  Buzzprout
} as any

export const MdxEmbedProvider: FunctionComponent = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
