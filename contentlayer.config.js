import { defineDocumentType, makeSource } from "contentlayer/source-files"
import highlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'; // Import remark-gfm plugin


/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.{mdx,md}`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}))

export const Articles = defineDocumentType(() => ({
  name: "Articles",
  filePathPattern: `articles/**/*.{mdx,md}`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}))


export const Books = defineDocumentType(() => ({
  name: "Books",
  filePathPattern: `books/**/*.{mdx,md}`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date:{
      type: 'date'
    },

  },
  computedFields,
}))

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.{mdx,md}`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    cover:
    {
      type: "string",
     
    },

    date: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page, Books, Articles],
  mdx: {
    rehypePlugins: [highlight],
    remarkPlugins: [remarkGfm], // Include the remark-gfm plugin
  },
})

