import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteContent',
  title: 'Site Content (SEO Depth)',
  type: 'document',
  fields: [
    defineField({
      name: 'siteKey',
      title: 'Page / Section',
      type: 'string',
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'Tax Calculator', value: 'tax'},
          {title: 'VAT Calculator', value: 'vat'},
          {title: 'Property / Transfer Duty', value: 'property'},
          {title: 'Two-Pot System', value: 'twopot'},
          {title: 'Fuel Calculator', value: 'fuel'},
          {title: 'Grocery Basket', value: 'groceries'},
          {title: 'Essentials Hub', value: 'essentials'},
          { title: 'Resources Hub', value: 'resources' },
          { title: 'Refund Estimator', value: 'refund' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'H1 Title',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Top Summary (above calculator)',
      type: 'text',
      rows: 4,
      description: 'Shown above the calculator – 2–4 sentences',
    }),
    defineField({
      name: 'deepContent',
      title: 'Deep SEO Content (below calculator)',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Long-form content that adds real depth for AdSense',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
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
  ],
  preview: {
    select: {
      title: 'siteKey',
      subtitle: 'title',
    },
  },
})