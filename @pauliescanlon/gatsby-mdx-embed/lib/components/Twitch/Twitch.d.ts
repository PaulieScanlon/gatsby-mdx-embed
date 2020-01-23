import { FunctionComponent } from 'react';
export interface ITwitchProps {
    /** Twitch id */
    twitchId: string;
    /** Skip to a time in the video */
    skipTo: {
        h?: number;
        m: number;
        s: number;
    };
    /** Auto play the video */
    autoPlay: boolean;
}
export declare const Twitch: FunctionComponent<ITwitchProps>;
