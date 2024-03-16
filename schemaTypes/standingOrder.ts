import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'standingOrder',
  title: 'Standing Order',
  type: 'document',
  fields: [
    defineField({
      name: 'supplier',
      title: 'Supplier',
      type: 'reference',
      to: [
        {
         type: 'supplier'
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'frequency',
      title: 'Frequency',
      type: 'string',
    }),
    defineField({
      title: 'Standing order details', 
      name: 'standingOrderDetails',
      type: 'array', 
      of: [{type: 'block'}],
      hidden: ({document}) => document?.usualOrder
    }),
  ],
  initialValue: () => ({
    orderDate: (new Date()).toISOString().substring(0, 10)
  }),
  preview: {
    select: {
      title: 'orderDate',
      subtitle: 'supplier.title',
      media: 'supplier.logo'
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: `Order date: ${title}`,
        subtitle: subtitle,
        media: media
      }
    }
  }
})
