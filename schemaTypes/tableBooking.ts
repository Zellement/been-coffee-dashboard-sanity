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
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required(),
      options: {
        dateFormat: 'DD-MM-YYYY',
      }
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          '07:00',
          '07:15',
          '07:30',
          '07:45',
          '08:00',
          '08:15',
          '08:30',
          '08:45',
          '09:00',
          '09:15',
          '09:30',
          '09:45',
          '10:00',
          '10:15',
          '10:30',
          '10:45',
          '11:00',
          '11:15',
          '11:30',
          '11:45',
          '12:00',
          '12:15',
          '12:30',
          '12:45',
          '13:00',
          '13:15',
          '13:30',
          '13:45',
          '14:00',
          '14:15',
          '14:30',
          '14:45',
          '15:00',
          '15:15',
          '15:30',
          '15:45',
          '16:00',
          '16:15',
          '16:30',
          '16:45',
          '17:00',
          '17:15',
          '17:30',
        ],
        layout: 'dropdown',
      },
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
