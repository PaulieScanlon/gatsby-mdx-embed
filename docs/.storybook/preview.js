import React from "react";
import { addParameters } from "@storybook/react";
import { DocsContainer } from "@storybook/addon-docs/blocks";

import { MdxEmbedProvider } from "../../@pauliescanlon/gatsby-mdx-embed/src/components/MdxEmbedProvider";

addParameters({
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <MdxEmbedProvider>{children}</MdxEmbedProvider>
      </DocsContainer>
    ),
  },
});
