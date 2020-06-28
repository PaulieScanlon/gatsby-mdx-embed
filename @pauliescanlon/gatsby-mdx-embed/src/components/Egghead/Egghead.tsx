import React, { FunctionComponent } from 'react'
import { getPadding } from '../../utils'
import { GeneralObserver } from '../GeneralObserver'

export interface IEggheadProps {
  /** Egghead lesson */
  lesson: string
}

export const Egghead: FunctionComponent<IEggheadProps> = ({
  lesson
}: IEggheadProps) => {
  return (
    <GeneralObserver>
      <div
        className="egghead-mdx-embed"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding('16:9')
        }}
      >
        <iframe
          title={`egghead-${lesson}`}
          src={`https://egghead.io/lessons/${lesson}/embed`}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
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
