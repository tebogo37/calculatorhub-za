import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'essentials',
  title: 'SA Essentials Content',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Fuel', value: 'fuel'},
          {title: 'Groceries', value: 'groceries'},
          {title: 'Travel / Trip', value: 'travel'},
          {title: 'Utilities', value: 'utilities'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Top Summary',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'deepContent',
      title: 'Deep Content (SEO)',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'question', type: 'string'},
            {name: 'answer', type: 'text'},
          ],
        },
      ],
    }),
    // Keep the price-related fields for reference / admin
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'category',
      subtitle: 'title',
    },
  },
})