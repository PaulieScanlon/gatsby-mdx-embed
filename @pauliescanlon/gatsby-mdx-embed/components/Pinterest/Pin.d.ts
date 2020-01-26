import { FunctionComponent } from 'react';
export interface IPinProps {
    /** Pinterest id */
    pinId: string;
    /** Size */
    size: 'small' | 'medium' | 'large';
}
export declare const Pin: FunctionComponent<IPinProps>;
