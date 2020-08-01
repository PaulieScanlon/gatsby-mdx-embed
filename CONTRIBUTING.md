# How to Contribute

## To add a new Embed

To add a new component there are several locations the new component needs to go, the rough outline is as follows:

- Add new component to `@pauliescanlon/gatsby-mdx-embed/src/components/ComponentFolder/ComponentName.tsx`
- Add `index.ts` file for component ` @pauliescanlon/gatsby-mdx-embed/src/components/ComponentFolder/index.ts`
- Add export to `@pauliescanlon/gatsby-mdx-embed/src/index.js` ex: `export { ComponentName } from './components/ComponentName.tsx`
- Add component to stories `docs/src/components/newComponent.stories.mdx`
- Add help documentation `docs/src/a-pages/3.help.stories.mdx`