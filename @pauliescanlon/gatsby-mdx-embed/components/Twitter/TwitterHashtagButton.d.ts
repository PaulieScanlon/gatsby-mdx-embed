import { FunctionComponent } from 'react';
export interface ITwitterHashtagButtonProps {
    /** Twitter hashtag */
    hashtag: string;
    /** The size of the button */
    size?: 'large' | 'small';
}
export declare const TwitterHashtagButton: FunctionComponent<ITwitterHashtagButtonProps>;
