import React from "react"
import { MdxEmbedProvider } from "./components/MdxEmbedProvider"

export const wrapRootElement = ({ element }) => (
  <MdxEmbedProvider>{element}</MdxEmbedProvider>
)
