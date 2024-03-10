import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'beenAwesomeWinner',
  title: 'Been Awesome Winner',
  type: 'document',
  fields: [
    defineField({
      name: 'winner',
      title: 'Winner',
      type: 'reference',
      to: [
        {
         type: 'teamMember'
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'from',
      title: 'From',
      type: 'date',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY'
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'to',
      title: 'To',
      type: 'date',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY'
      },
    }),
    
  ],
  initialValue: () => ({
    from: (new Date()).toISOString().substring(0, 10)
  }),
  preview: {
    select: {
      title: 'winner.name',
      subtitle: 'from',
      media: 'winner.image',
    },
  },
 
})
