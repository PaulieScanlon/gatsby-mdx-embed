import { FunctionComponent } from 'react';
export interface IYouTubeProps {
    /** YouTube id */
    youTubeId: string;
    /** Aspect ratio of YouTube video */
    aspectRatio?: '1:1' | '16:9' | '4:3' | '3:2' | '8:5';
    /** Skip to a time in the video */
    skipTo: {
        h?: number;
        m: number;
        s: number;
    };
    /** Auto play the video */
    autoPlay: boolean;
}
export declare const YouTube: FunctionComponent<IYouTubeProps>;
