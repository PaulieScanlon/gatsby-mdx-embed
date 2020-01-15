import React, { FunctionComponent } from 'react'
import { MDXProvider } from '@mdx-js/react'

import { CodePen, ICodePenProps } from '../CodePen'
import { CodeSandbox, ICodeSandboxProps } from '../CodeSandbox'
import { Flickr, IFlickrProps } from '../Flickr'
import { Gist, IGistProps } from '../Gist'
import { Vimeo, IVimeoProps } from '../Vimeo'
import { Instagram, IInstagramProps } from '../Instagram'
import { SoundCloud, ISoundCloudProps } from '../SoundCloud'
import { Spotify, ISpotifyProps } from '../Spotify'
import { Twitch, ITwitchProps } from '../Twitch'
import {
  Tweet,
  ITweetProps,
  TwitterFollowButton,
  ITwitterFollowButtonProps,
  TwitterHashtagButton,
  ITwitterHashtagButtonProps,
  TwitterList,
  ITwitterListProps,
  TwitterMentionButton,
  ITwitterMentionButtonProps,
  TwitterTimeline,
  ITwitterTimelineProps
} from '../Twitter'
import { Wikipedia, IWikipediaProps } from '../Wikipedia'
import { YouTube, IYouTubeProps } from '../YouTube'

const components = {
  CodePen: (props: ICodePenProps) => <CodePen {...props} />,
  CodeSandbox: (props: ICodeSandboxProps) => <CodeSandbox {...props} />,
  Flickr: (props: IFlickrProps) => <Flickr {...props} />,
  Gist: (props: IGistProps) => <Gist {...props} />,
  Instagram: (props: IInstagramProps) => <Instagram {...props} />,
  SoundCloud: (props: ISoundCloudProps) => <SoundCloud {...props} />,
  Spotify: (props: ISpotifyProps) => <Spotify {...props} />,
  Twitch: (props: ITwitchProps) => <Twitch {...props} />,
  Tweet: (props: ITweetProps) => <Tweet {...props} />,
  TwitterFollowButton: (props: ITwitterFollowButtonProps) => (
    <TwitterFollowButton {...props} />
  ),
  TwitterHashtagButton: (props: ITwitterHashtagButtonProps) => (
    <TwitterHashtagButton {...props} />
  ),
  TwitterList: (props: ITwitterListProps) => <TwitterList {...props} />,
  TwitterMentionButton: (props: ITwitterMentionButtonProps) => (
    <TwitterMentionButton {...props} />
  ),
  TwitterTimeline: (props: ITwitterTimelineProps) => (
    <TwitterTimeline {...props} />
  ),
  Vimeo: (props: IVimeoProps) => <Vimeo {...props} />,
  Wikipedia: (props: IWikipediaProps) => <Wikipedia {...props} />,
  YouTube: (props: IYouTubeProps) => <YouTube {...props} />
} as any

export const MdxEmbedProvider: FunctionComponent = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
