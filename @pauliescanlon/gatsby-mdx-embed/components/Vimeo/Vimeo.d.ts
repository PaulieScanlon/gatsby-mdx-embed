import { FunctionComponent } from 'react';
export interface IVimeoProps {
    /** Vimeo id */
    vimeoId: string;
    /** Skip to a time in the video */
    skipTo: {
        h?: number;
        m: number;
        s: number;
    };
    /** Auto play the video */
    autoPlay: boolean;
}
export declare const Vimeo: FunctionComponent<IVimeoProps>;
