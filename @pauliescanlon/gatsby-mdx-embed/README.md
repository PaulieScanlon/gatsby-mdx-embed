<a href="https://gatsby-mdx-embed.netlify.com/" target="_blank">
<img src="https://gatsby-mdx-embed.netlify.com/images/mdx-embed-main-og-image.jpg" alt="gatsby-mdx-embed image" />
</a>

# gatsby-mdx-embed

With `gatsby-mdx-embed` you can embed media content from providers like Twitter, YouTube, Instgram and number or others directly into your `.mdx` files ... **no imports required**

## 👁️ Preview

- [Live Demo](https://gatsby-mdx-embed.netlify.com/)

## 🚀 Getting started

### Install

```
npm install @pauliescanlon/gatsby-mdx-embed
```

### Install peer dependancies

```
npm install @mdx-js/react gatsby-plugin-mdx
```

### Setup (gatsby.config)

```js
module.exports = {
  ...
  plugins: [`@pauliescanlon/gatsby-mdx-embed`]
```

gatsby-mdx-embed injects an `MdxProvider` if it's the first and or only plugin that uses this method you shouldn't have any clashes.

However if you're using a theme or some other plugin that uses `.mdx` you may need to switch the order of the plugins.

A note on using multiple `MdxProvider`(s) directly from [@chrisbiscardi](https://twitter.com/chrisbiscardi)

> Multiple providers will merge the components object. **Last provider wins**

Thanks to the following projects which were used as references

- [gatsby-remark-oembed](https://github.com/raae/gatsby-remark-oembed)
- [gatsby-plugin-twitter](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-twitter)
- [gatsby-plugin-instagram-embed](https://github.com/jlengstorf/gatsby-plugin-instagram-embed)
