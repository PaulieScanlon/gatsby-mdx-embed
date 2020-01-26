import { FunctionComponent } from 'react';
export interface ITweetProps {
    /** Tweet link */
    tweetLink: string;
    /** Color theme of the Tweet */
    theme?: 'light' | 'dark';
    /** Alignment of the Tweet */
    align?: 'left' | 'center' | 'right';
}
export declare const Tweet: FunctionComponent<ITweetProps>;
