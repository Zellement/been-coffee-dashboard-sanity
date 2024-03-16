import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'supplier',
  title: 'Supplier',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
  ],
})
