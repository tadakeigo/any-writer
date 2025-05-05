// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string',},
    date: { type: 'date', required: true },
    publish: { type: 'boolean', default: true },
    image: { type: 'string', required: true },
    authors: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => `/${doc._raw.flattenedPath}` },
slugAsParams: {
  type: 'string',
  resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1)[0],
},
  },
}))

export default makeSource({ contentDirPath: './content', documentTypes: [Post] })
