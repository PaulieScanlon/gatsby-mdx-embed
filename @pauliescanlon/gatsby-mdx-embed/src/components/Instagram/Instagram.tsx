import React, { FunctionComponent, Fragment } from 'react'

export interface IInstagramProps {
  /** Instagram id */
  instagramId: string
}

export const Instagram: FunctionComponent<IInstagramProps> = ({
  instagramId
}: IInstagramProps) => (
  <Fragment>
    <blockquote
      className="instagram-media"
      data-instgrm-version="12"
      // data-instgrm-captioned
    >
      <a href={`https://instagram.com/p/${instagramId}`}>
        {typeof window !== 'undefined' && !(window as any).instgrm
          ? 'Loading'
          : ''}
      </a>
    </blockquote>
  </Fragment>
)
