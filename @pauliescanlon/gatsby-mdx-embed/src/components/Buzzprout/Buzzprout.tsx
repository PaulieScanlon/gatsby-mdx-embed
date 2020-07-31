import React, { FunctionComponent } from 'react'
import { GeneralObserver } from '../GeneralObserver'

export interface IBuzzproutProps {
  /* Buzzprout podcast episode url */
  url: string
}

export const Buzzprout: FunctionComponent<IBuzzproutProps> = ({
  url
}: IBuzzproutProps) => {
  const embedUrl = `${url}?client_source=admin&amp;iframe=true`
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
