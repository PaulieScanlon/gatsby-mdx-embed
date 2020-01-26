import { FunctionComponent } from 'react';
export interface IWikipediaProps {
    /** Wikipedia page link */
    wikipediaLink: string;
    /** Height for the iFrame */
    height?: number | string;
}
export declare const Wikipedia: FunctionComponent<IWikipediaProps>;
