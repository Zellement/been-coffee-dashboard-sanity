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
      validation: Rule => Rule.required()
    }),
    defineField({
      title: 'Standing order details', 
      name: 'standingOrderDetails',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required(),
      hidden: ({document}) => document?.usualOrder
    }),
  ],
  initialValue: () => ({
    orderDate: (new Date()).toISOString().substring(0, 10)
  }),
  preview: {
    select: {
      title: 'supplier.title',
      subtitle: 'frequency',
      media: 'supplier.logo'
    },
    // prepare(selection) {
    //   const {title, subtitle, media} = selection
    //   return {
    //     title: `${title}`,
    //     subtitle: subtitle,
    //     media: media
    //   }
    // }
  }
})
