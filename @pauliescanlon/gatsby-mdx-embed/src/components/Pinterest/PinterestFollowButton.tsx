import React, { FunctionComponent } from 'react'

export interface IPinterestFollowButtonProps {
  /** Pinterest username */
  username: string
}

export const PinterestFollowButton: FunctionComponent<IPinterestFollowButtonProps> = ({
  username
}: IPinterestFollowButtonProps) => (
  <a
    className="pinterest-follow-button pinterest-follow-button-mdx-embed"
    data-pin-do="buttonFollow"
    href={`https://www.pinterest.com/${username}/`}
  >
    {`Follow @${username}`}
  </a>
)
