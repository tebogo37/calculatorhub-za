import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'taxGuide',
  title: 'Tax Guide / Lead Magnet',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Guide Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Lucide Icon Name',
      type: 'string',
      description: 'e.g. FileText, Calculator, BookOpen',
    }),
    defineField({
      name: 'checklistItems',
      title: 'Checklist Items',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'body',
      title: 'Full Guide Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'pdfUrl',
      title: 'PDF Download URL',
      type: 'url',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
    }),
  ],
})