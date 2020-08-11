import React from 'react'
import { addParameters } from '@storybook/react'
import { DocsContainer } from '@storybook/addon-docs/blocks'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'emotion-theming'
import * as ThemeUIComponents from 'theme-ui'

import { MdxEmbedProvider } from '../../@pauliescanlon/gatsby-mdx-embed/src/components/MdxEmbedProvider'

import theme from '../src/theme'

addParameters({
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <ThemeProvider theme={theme}>
          <MDXProvider components={ThemeUIComponents}>
            <MdxEmbedProvider>{children}</MdxEmbedProvider>
          </MDXProvider>
        </ThemeProvider>
      </DocsContainer>
    ),
  },
})
