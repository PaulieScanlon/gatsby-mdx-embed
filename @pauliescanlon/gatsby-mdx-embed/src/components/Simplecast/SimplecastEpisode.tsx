import React, { FunctionComponent } from 'react'
import { GeneralObserver } from '../GeneralObserver'

export interface ISimplecastEpisodeProps {
  /** Simplecast Episode */
  episodeId: string
  darkTheme?: boolean
}

export const SimplecastEpisode: FunctionComponent<ISimplecastEpisodeProps> = ({
  episodeId,
  darkTheme
}: ISimplecastEpisodeProps) => {
  return (
    <GeneralObserver>
      <div
        className="simplecast-episode-mdx-embed"
        style={{
          position: 'relative',
          height: '200px',
          width: '100%'
        }}
      >
        <iframe
          title={`simplecast-${episodeId}`}
          src={`https://player.simplecast.com/${episodeId}?dark=${darkTheme}`}
          frameBorder="no"
          scrolling="no"
          seamless
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    </GeneralObserver>
  )
}
