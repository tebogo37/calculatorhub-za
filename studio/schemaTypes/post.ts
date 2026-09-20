import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post / Guide',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'targetSite',
      title: 'Target Section',
      type: 'string',
      options: {
        list: [
          {title: 'Home / Essentials', value: 'home'},
          {title: 'Tax', value: 'tax'},
          {title: 'VAT', value: 'vat'},
          {title: 'Property', value: 'property'},
          {title: 'Two-Pot', value: 'twopot'},
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary for cards and meta description fallback',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
        },
      ],
    }),
    // SEO Fields
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Recommended: 50–60 characters',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 150–160 characters',
    }),
    defineField({
      name: 'focusKeywords',
      title: 'Focus Keywords',
      type: 'string',
      description: 'Comma separated',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs (for structured data)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'question', type: 'string', title: 'Question'},
            {name: 'answer', type: 'text', title: 'Answer'},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'targetSite',
    },
  },
})