import React, { FunctionComponent } from 'react'
import { GeneralObserver } from '../GeneralObserver'

export interface IBuzzproutProps {
  /* Buzzprout id */
  buzzproutId: string
}

export const Buzzprout: FunctionComponent<IBuzzproutProps> = ({
  buzzproutId
}: IBuzzproutProps) => {
  return (
    <GeneralObserver>
      <div style={{ position: 'relative' }}>
        <iframe
          src={`https://buzzsprout.com/${buzzproutId}?client_source=admin&amp;iframe=true`}
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
