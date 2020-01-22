import React, { FunctionComponent } from 'react'

export interface IInstagramProps {
  /** Instagram id */
  instagramId: string
}

export const Instagram: FunctionComponent<IInstagramProps> = ({
  instagramId
}: IInstagramProps) => (
  <blockquote
    className="instagram-media instagram-mdx-embed"
    data-instgrm-version="12"
    // data-instgrm-captioned
  >
    <a href={`https://instagram.com/p/${instagramId}`}>
      {typeof window !== 'undefined' && !(window as any).instgrm
        ? 'Loading'
        : ''}
    </a>
  </blockquote>
)
