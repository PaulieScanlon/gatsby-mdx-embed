import React, { FunctionComponent, Fragment } from 'react'

export interface ITwitterFollowButtonProps {
  /** Twitter username */
  username: string
  /** Show the follower count */
  showFollowers?: boolean
  /** Show the username */
  showUsername?: boolean
  /** The size of the button */
  size?: 'large' | 'small'
}

export const TwitterFollowButton: FunctionComponent<ITwitterFollowButtonProps> = ({
  username,
  showFollowers = false,
  showUsername = true,
  size = 'small'
}: ITwitterFollowButtonProps) => {
  return (
    <Fragment>
      <a
        href={`https://twitter.com/${username}?ref_src=twsrc%5Etfw`}
        className="twitter-follow-button"
        data-show-count={showFollowers}
        data-show-screen-name={showUsername}
        data-size={size}
      >{`Follow @${username}`}</a>
    </Fragment>
  )
}
