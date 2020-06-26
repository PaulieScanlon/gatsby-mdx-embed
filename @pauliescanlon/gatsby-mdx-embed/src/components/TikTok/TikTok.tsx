import React, { FunctionComponent } from 'react'
import { GeneralObserver } from '../GeneralObserver'
import { handleTikTokLoad } from './utils'
export interface ITikTokProps {
  /** TikTok id */
  tikTokId: string
}

export const TikTok: FunctionComponent<ITikTokProps> = ({
  tikTokId: tikTokId
}: ITikTokProps) => (
  <GeneralObserver onEnter={() => handleTikTokLoad()}>
    <blockquote
      className="tiktok-embed _embed_video_video_wrapper"
      cite={`https://www.tiktok.com/@scout2015/video/6718335390845095173", "data-video-id": "6718335390845095173`}
    >
      <section>
        <a href={`https://tiktok.com/@scout2015/video/${tikTokId}`}>
          {typeof window !== 'undefined' && !(window as any).tiktok
            ? 'Loading'
            : ''}
        </a>
      </section>
    </blockquote>
  </GeneralObserver>
)
