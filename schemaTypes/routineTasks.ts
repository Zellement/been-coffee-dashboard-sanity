import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'routineTasks',
  title: 'Routine Tasks',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'slug',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'estimate',
      title: 'Estimate',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'frequency',
      title: 'Frequency',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ref_link',
      title: 'Ref Link',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
  initialValue: () => ({
    publishedAt: (new Date()).toISOString().substring(0, 10)
  }),
})
