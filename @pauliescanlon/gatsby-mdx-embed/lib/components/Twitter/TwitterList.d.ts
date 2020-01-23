import { FunctionComponent } from 'react';
export interface ITwitterListProps {
    /** Twitter username */
    username: string;
    /** The Twitter list name */
    listName: string;
    /** Color theme of the Timeline */
    theme?: 'light' | 'dark';
    /** Width for the iFrame */
    width?: number | string;
    /** Height for the iFrame. Null is full height */
    height?: number | string | null;
}
export declare const TwitterList: FunctionComponent<ITwitterListProps>;
