import React, { FunctionComponent } from 'react'
import { GeneralObserver } from '../GeneralObserver'

export interface IBuzzproutProps {
  /* Buzzprout podcast id */
  podcastId: string
  /* Podcast episode id */
  episodeId: string
}

export const Buzzprout: FunctionComponent<IBuzzproutProps> = ({
  podcastId,
  episodeId
}: IBuzzproutProps) => {
  const embedUrl = `https://buzzsprout.com/${podcastId}/${episodeId}?client_source=admin&amp;iframe=true`
  return (
    <GeneralObserver>
      <div style={{ position: 'relative' }}>
        <iframe
          src={embedUrl}
          width="100%"
          height="200"
          frameBorder="0"
          scrolling="no"
          title="Podcast Episode"
        />
      </div>
    </GeneralObserver>
  )
}
