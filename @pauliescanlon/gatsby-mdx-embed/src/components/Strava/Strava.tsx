import React, { FunctionComponent } from 'react'
import { GeneralObserver } from '../GeneralObserver'
export interface IStravaProps {
  /** The activity part of the URL provided by Strava's share action on the activity page. */
  activityId: string
}

export const Strava: FunctionComponent<IStravaProps> = ({
  activityId
}: IStravaProps) => {
  return (
    <GeneralObserver>
      <iframe
        title={`strava-${activityId}`}
        className="strava-mdx-embed"
        height="405"
        style={{
          maxWidth: '590px',
          width: '100%'
        }}
        frameBorder="0"
        allowTransparency
        scrolling="no"
        src={`https://www.strava.com/activities/${activityId}`}
      />
    </GeneralObserver>
  )
}
