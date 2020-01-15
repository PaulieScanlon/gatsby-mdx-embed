import React, { FunctionComponent } from 'react'

export interface ITwitterListProps {
  /** Twitter username */
  username: string
  /** The Twitter list name */
  listName: string
  /** Color theme of the Timeline */
  theme?: 'light' | 'dark'
  /** Width for the iFrame */
  width?: number | string
  /** Height for the iFrame. Null is full height */
  height?: number | string | null
}

export const TwitterList: FunctionComponent<ITwitterListProps> = ({
  username,
  theme = 'light',
  listName,
  width = '498px',
  height = null
}: ITwitterListProps) => {
  return (
    <div style={{ overflow: 'auto' }}>
      <a
        className="twitter-timeline"
        data-theme={theme}
        data-width={width}
        data-height={height}
        href={`https://twitter.com/${username}/lists/${listName}?ref_src=twsrc%5Etfw`}
      >
        {`A Twitter List by @${username}`}
      </a>
    </div>
  )
}
