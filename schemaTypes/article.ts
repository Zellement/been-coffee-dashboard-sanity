import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'sticky',
      title: 'Sticky',
      type: 'boolean',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [
        {
          title: 'File with title',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'value',
              type: 'string'
            },
            {
              title: 'File',
              name: 'file',
              type: 'file',
              options: {
                originalFilename: true
              }
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'articleCategory'}}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'nextArticle',
      title: 'Next Article',
      description: 'Select the next article, great for linking articles together',
      type: 'reference',
      to: [{type: 'article'}],
    }),
  ],
  initialValue: () => ({
    publishedAt: (new Date()).toISOString().substring(0, 10)
  }),
})
