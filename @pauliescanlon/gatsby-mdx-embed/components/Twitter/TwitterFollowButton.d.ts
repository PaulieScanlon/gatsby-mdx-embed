import { FunctionComponent } from 'react';
export interface ITwitterFollowButtonProps {
    /** Twitter username */
    username: string;
    /** Show the follower count */
    showFollowers?: boolean;
    /** Show the username */
    showUsername?: boolean;
    /** The size of the button */
    size?: 'large' | 'small';
}
export declare const TwitterFollowButton: FunctionComponent<ITwitterFollowButtonProps>;
