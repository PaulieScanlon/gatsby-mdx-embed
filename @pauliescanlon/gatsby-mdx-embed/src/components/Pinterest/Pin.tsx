import React, { FunctionComponent } from 'react'

export interface IPinProps {
  /** Pinterest id */
  pinId: string
  /** Size */
  size: 'small' | 'medium' | 'large'
}

export const Pin: FunctionComponent<IPinProps> = ({
  pinId,
  size = 'small'
}: IPinProps) => (
  <a
    className="pinterest-pin"
    data-pin-do="embedPin"
    data-pin-width={size}
    href={`https://www.pinterest.com/pin/${pinId}`}
  />
)
