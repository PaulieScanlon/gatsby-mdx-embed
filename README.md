<a href="https://gatsby-mdx-embed.netlify.com/" target="_blank">
<img src="https://gatsby-mdx-embed.netlify.app/mdx-embed-og-image.jpg" alt="gatsby-mdx-embed image" />
</a>

## 🚨 This project is now archived 🚨

...but good news!

A new project is on the way, head over to [mdx-embed](https://github.com/PaulieScanlon/mdx-embed) for more info

If you have any questions in the mean time you'll find me on Twitter: [@pauliescanlon](https://twitter.com/PaulieScanlon)

# gatsby-mdx-embed

With `gatsby-mdx-embed` you can embed media content from providers like Twitter, YouTube, Instagram and a number of others directly in `.mdx` ... **no imports required**

## 👁️ Preview

- [Live Demo](https://gatsby-mdx-embed.netlify.com/)

## 🚀 Getting started

### Install

```
npm install @pauliescanlon/gatsby-mdx-embed --save
```

### Install peer dependencies

```
npm install gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react --save
```

### Setup

```js
// gatsby.config
module.exports = {
  ...
  plugins: [`@pauliescanlon/gatsby-mdx-embed`]
  ...
}
```

`gatsby-mdx-embed` automatically injects an `MDXProvider`. If it's the first and / or only plugin that uses this method you shouldn't have any clashes.

However, if you're using a theme or some other plugin that uses `.mdx` you may need to switch the order of the plugins.

A note on using multiple `MDXProvider`(s) directly from [@chrisbiscardi](https://twitter.com/chrisbiscardi)

> Multiple providers will merge the components object. **Last provider wins**

If the above doesn't help you might need to manually import the `MdxEmbedProvider` and use it to wrap your `MDXRenderer`

```js
// layout.js

import { MdxEmbedProvider } from '@pauliescanlon/gatsby-mdx-embed';

<MdxEmbedProvider>
  <MDXRenderer>{body}</MDXRenderer>
</MdxEmbedProvider>;
```

## General Observer update 07/05/2020

MDX Embed has been updated to include Intersection Observer support for all providers.

With Intersection Observer support now heavy provider scripts won't be loaded until the component in question scrolls in to view... Keeping your site blazing fast! ⚡

If you're using **gatsby-mdx-embed** in your project i'd love to hear from you [@pauliescanlon](https://twitter.com/PaulieScanlon)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5P31B7G8)

Thanks to the following projects which were used as references

- [gatsby-remark-oembed](https://github.com/raae/gatsby-remark-oembed)
- [gatsby-plugin-twitter](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-twitter)
- [gatsby-plugin-instagram-embed](https://github.com/MichaelDeBoey/gatsby-plugin-instagram-embed)
