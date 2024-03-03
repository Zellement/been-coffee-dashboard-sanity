import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'order',
  title: 'Order',
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
      name: 'orderedBy',
      title: 'Ordered by',
      type: 'reference',
      to: [
        {
         type: 'teamMember'
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'orderDate',
      title: 'Order date',
      type: 'date',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY'
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'expectedDeliveryDate',
      title: 'Expected delivery date',
      type: 'date',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY'
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'usualOrder',
      title: 'Usual order',
      type: 'boolean',
      description: 'Uncheck this if you wish to add more details. Leaving this checked will display "Usual order" in the preview.',
      initialValue: true
    }),
    defineField({
      name: 'orderDetails',
      title: 'Order details',
      type: 'text',
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
