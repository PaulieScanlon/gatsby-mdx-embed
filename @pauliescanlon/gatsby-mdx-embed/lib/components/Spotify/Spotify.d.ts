import { FunctionComponent } from 'react';
export interface ISpotifyProps {
    /** Spotify link */
    spotifyLink: string;
    /** Width for the iFrame */
    width?: number | string;
    /** Height for the iFrame */
    height?: number | string;
}
export declare const Spotify: FunctionComponent<ISpotifyProps>;
