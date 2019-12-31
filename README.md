# gatsby-mdx-embed

With `gatsby-mdx-embed` you can embed media content from providers like Twitter, YouTube, Instgram and number or others directly into your `.mdx` files ... **no imports required**

## 👁️ Preview

- [Live Demo](https://gatsby-mdx-embed.netlify.com/)

## 🚀 Getting started

### Install

```
npm install @pauliescanlon/gatsby-mdx-embed
```

By using the `MdxEmbedProvider` all you have to do is use the relevant component in your `.mdx` file and the embed codes will execute.

If you're using `.mdx` then you're probably already familiar with ...

```js
<MdxProivider>{children}</MdxProivider>
```

or if you're sourcing `.mdx` from somewhere other than `src/pages` you'd also being using ...

```js
<MdxProvider>
  <MdxRenderer>{mdx.body}</MdxRenderer>
</MdxProvider>
```

`gatsby-mdx-embed` is just another provider and can be used along side your existing providers or it can be used alone.

```js
<MdxEmbedProivider>{children}</MdxEmbedProivider>
```

or

```js
<MdxEmbedProivider>
  <MdxProvider>{children}</MdxProvider>
</MdxEmbedProivider>
```

A note on using multiple providers directly from [@chrisbiscardi](https://twitter.com/chrisbiscardi)

> Multiple providers will merge the components object. **Last provider wins**

### Setup (gatsby.config)

```js
module.exports = {
  ...
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        plugins: [`@pauliescanlon/gatsby-mdx-embed`],
      },
    },
  ],
}
```

### Options (gatsby.config)

By default the plugin injects x3 scripts for `twitter`, `instagram` and `flickr`

If you're not using one of any of these providers you can exclude the scripts to keep your blog **blazing fast**

```js
plugins: [
  {
    resolve: `@pauliescanlon/gatsby-mdx-embed`,
    options: {
      exclude: ["flickr", "instagram"]
    }
  }
];
```

### Components

The plugin currently supports the following components

- CodePen
- CodeSandbox
- Flickr
- Instagram
- Spotify
- Twitter
- Vimeo
- YouTube

\***\*TODO add prop tables for the components\*\***

Thanks to the following projects which helped and inspired me

- [gatsby-remark-oembed](https://github.com/raae/gatsby-remark-oembed)
- [gatsby-plugin-twitter](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-twitter)
