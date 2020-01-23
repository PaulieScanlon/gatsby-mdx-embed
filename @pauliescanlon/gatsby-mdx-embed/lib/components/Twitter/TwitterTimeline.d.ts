import { FunctionComponent } from 'react';
export interface ITwitterTimelineProps {
    /** Twitter username */
    username: string;
    /** Show Tweets liked by the username */
    showLikes?: boolean | null;
    /** Color theme of the Timeline */
    theme?: 'light' | 'dark';
    /** Width for the iFrame */
    width?: number | string;
    /** Height for the iFrame. Null is full height */
    height?: number | string | null;
}
export declare const TwitterTimeline: FunctionComponent<ITwitterTimelineProps>;
