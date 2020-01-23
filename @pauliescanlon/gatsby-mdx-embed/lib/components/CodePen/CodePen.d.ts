import { FunctionComponent } from 'react';
export interface ICodePenProps {
    /** CodePen id */
    codePenId: string;
    /** Height for the iFrame */
    height?: number;
    /** Which tabs to display */
    tabs?: 'js' | 'css' | 'scss' | 'less' | 'result';
}
export declare const CodePen: FunctionComponent<ICodePenProps>;
