import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'


export default defineType({
  name: 'award',
  title: 'Award',
  type: 'document',
  fields: [
    orderRankField({ type: "date" }),
    defineField({
      name: 'awardGiver',
      title: 'Award Giver',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'date',
      title: 'Date Awarded',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY'
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  
  preview: {
    select: {
      title: 'name',
      subtitle: 'date',
      media: 'image',
      awardGiver: 'awardGiver'
    },
    prepare(selection) {
      const {title, subtitle, media, awardGiver} = selection
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const dateY = new Date(subtitle).getFullYear()
      const dateM = months[new Date(subtitle).getMonth()]
      const date = `${dateM} ${dateY}`
      return {
        title: `${title}`,
        subtitle: `${awardGiver} | ${date}`,
        media: media
      }
    }
  },
  orderings: [orderRankOrdering],
                  
})
