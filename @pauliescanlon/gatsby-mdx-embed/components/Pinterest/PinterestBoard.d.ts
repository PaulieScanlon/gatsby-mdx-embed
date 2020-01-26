import { FunctionComponent } from 'react';
export interface IPinterestBoardProps {
    /** Pinterest link */
    pinterestLink: string;
    /** Width for the board */
    width?: number;
    /** Height for the board */
    height?: number;
    /** Size of the thumbnails */
    imageWidth?: number;
    /** The type of board */
    variant?: 'board' | 'user';
}
export declare const PinterestBoard: FunctionComponent<IPinterestBoardProps>;
