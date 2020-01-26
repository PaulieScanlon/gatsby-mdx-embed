import { FunctionComponent } from 'react';
export interface ISoundCloudProps {
    /** SoundCloud link */
    soundCloudLink: string;
    /** Auto play audio */
    autoPlay?: boolean;
    /** Show the visual artwork */
    visual?: boolean;
    /** Width for the iFrame */
    width?: number | string;
    /** Height for the iFrame */
    height?: number | string;
    /** The color of the play button without the # */
    color?: string;
}
export declare const SoundCloud: FunctionComponent<ISoundCloudProps>;
