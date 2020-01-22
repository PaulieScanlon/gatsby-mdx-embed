import React, { FunctionComponent } from 'react'

export interface ICodePenProps {
  /** CodePen id */
  codePenId: string
  /** Height for the iFrame */
  height?: number
  /** Which tabs to display */
  tabs?: 'js' | 'css' | 'scss' | 'less' | 'result'
}

export const CodePen: FunctionComponent<ICodePenProps> = ({
  codePenId,
  height = 500,
  tabs = 'result'
}: ICodePenProps) => (
  <iframe
    title={`codePen-${codePenId}`}
    className="codepen-mdx-embed"
    height={height}
    style={{
      width: '100%'
    }}
    scrolling="no"
    src={`https://codepen.io/team/codepen/embed/${codePenId}?height=265&theme-id=default&default-tab=${tabs}`}
    frameBorder="no"
    allowFullScreen
  />
)
