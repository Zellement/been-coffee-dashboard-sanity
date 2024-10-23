import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'alwaysShow',
      title: 'Always Show',
      description: 'Always show this task, regardless of date. Must be manually removed.',
      type: 'boolean',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
  ],
  initialValue: () => ({
    publishedAt: (new Date()).toISOString().substring(0, 10)
  }),
})
