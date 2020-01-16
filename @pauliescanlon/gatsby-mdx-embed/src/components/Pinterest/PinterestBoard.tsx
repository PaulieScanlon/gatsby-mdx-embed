import React, { FunctionComponent } from 'react'

export interface IPinterestBoardProps {
  /** Pinterest link */
  pinterestLink: string
  /** Width for the board */
  width?: number
  /** Height for the board */
  height?: number
  /** Size of the thumbnails */
  imageWidth?: number
  /** The type of board */
  variant?: 'board' | 'user'
}

export const PinterestBoard: FunctionComponent<IPinterestBoardProps> = ({
  pinterestLink,
  width = 400,
  height = 250,
  imageWidth = 80,
  variant = 'board'
}: IPinterestBoardProps) => (
  <a
    className="pinterest-board"
    data-pin-do={`embed${variant.charAt(0).toUpperCase()}${variant.slice(1)}`}
    data-pin-board-width={width}
    data-pin-scale-height={height}
    data-pin-scale-width={imageWidth}
    href={`https://www.pinterest.com/${pinterestLink}`}
  />
)
