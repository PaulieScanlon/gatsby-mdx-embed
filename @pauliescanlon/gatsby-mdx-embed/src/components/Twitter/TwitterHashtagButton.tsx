import React, { FunctionComponent } from 'react'

export interface ITwitterHashtagButtonProps {
  /** Twitter hashtag */
  hashtag: string
  /** The size of the button */
  size?: 'large' | 'small'
}

export const TwitterHashtagButton: FunctionComponent<ITwitterHashtagButtonProps> = ({
  hashtag,
  size = 'small'
}: ITwitterHashtagButtonProps) => (
  <a
    href={`https://twitter.com/intent/tweet?button_hashtag=${hashtag}&ref_src=twsrc%5Etfw`}
    className="twitter-hashtag-button"
    data-size={size}
  >{`Tweet #${hashtag}`}</a>
)
