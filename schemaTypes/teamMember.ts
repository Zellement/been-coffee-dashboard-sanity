import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'


export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    orderRankField({ type: "teamMember" }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'managerKeyHolder',
      title: 'Manager / Keyholder?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'startDate',
      title: 'Start date',
      type: 'date',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY'
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'birthday',
      title: 'Birthday',
      type: 'date',
      options: {
        dateFormat: 'Do MMMM'
      },
    }),
    defineField({
      name: 'homebaseUserId',
      title: 'Homebase User ID',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'formerEmployee',
      title: 'Former employee',
      type: 'boolean',
      initialValue: false,
      description: 'Check this box if the team member is no longer with the company',
    }),
    defineField({
      name: 'lastDay',
      title: 'Last date',
      type: 'date',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY'
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
  ],
  
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
  orderings: [orderRankOrdering],
                  
})
