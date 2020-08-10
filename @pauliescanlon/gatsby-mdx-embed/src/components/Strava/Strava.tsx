import React, { FunctionComponent } from 'react'
import { GeneralObserver } from '../GeneralObserver'
export interface IStravaProps {
  /** The embed URL provided by strava on the activity page */
  stravaEmbedUrl: string
}

export const Strava: FunctionComponent<IStravaProps> = ({
  stravaEmbedUrl
}: IStravaProps) => {
  return (
    <GeneralObserver>
      <iframe
        title={`strava-${stravaEmbedUrl}`}
        className="strava-mdx-embed"
        height="405"
        style={{
          width: '100%'
        }}
        frameBorder="0"
        allowTransparency
        scrolling="no"
        src={stravaEmbedUrl}
      />
    </GeneralObserver>
  )
}
