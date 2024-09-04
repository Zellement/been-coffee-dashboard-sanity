import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tableBooking',
  title: 'Table Booking',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'datetime',
      title: 'Date & Time',
      type: 'datetime',
      validation: Rule => Rule.required(),
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeStep: 15
      }
    }),
    defineField({
      name: 'people',
      title: 'People',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'info',
      title: 'Info',
      type: 'text',
    }),
  ],
  initialValue: () => ({
    datetime: (new Date()).toISOString().substring(0, 10)
  }),
})
