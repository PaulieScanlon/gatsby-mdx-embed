import React, { FunctionComponent } from 'react'
import { MdxEmbedProvider } from './components/MdxEmbedProvider'

interface IWrapRootElement {
  element: React.ReactNode
}

export const wrapRootElement: FunctionComponent<IWrapRootElement> = ({
  element
}) => <MdxEmbedProvider>{element}</MdxEmbedProvider>
