import React from 'react'
import { MdxEmbedProvider } from './components/MdxEmbedProvider'

interface IProviderProps {
  element: React.ReactNode
}

module.exports = ({ element }: IProviderProps) => (
  <MdxEmbedProvider>{element}</MdxEmbedProvider>
)
