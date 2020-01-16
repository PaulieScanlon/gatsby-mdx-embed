import React, { FunctionComponent } from 'react'

export interface ITwitterMentionButtonProps {
  /** Twitter username */
  username: string
  /** The size of the button */
  size?: 'large' | 'small'
}

export const TwitterMentionButton: FunctionComponent<ITwitterMentionButtonProps> = ({
  username,
  size = 'small'
}: ITwitterMentionButtonProps) => (
  <a
    href={`https://twitter.com/intent/tweet?screen_name=${username}&ref_src=twsrc%5Etfw`}
    className="twitter-mention-button"
    data-size={size}
  >{`Tweet to @${username}`}</a>
)
