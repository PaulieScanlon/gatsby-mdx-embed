import { FunctionComponent } from 'react';
export interface ITwitterMentionButtonProps {
    /** Twitter username */
    username: string;
    /** The size of the button */
    size?: 'large' | 'small';
}
export declare const TwitterMentionButton: FunctionComponent<ITwitterMentionButtonProps>;
