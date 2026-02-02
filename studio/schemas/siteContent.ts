
export default {
  name: 'siteContent',
  title: 'Site Content (SEO)',
  type: 'document',
  fields: [
    { name: 'siteKey', title: 'Site Key', type: 'string', options: { list: ['vat', 'tax', 'property'] } },
    { name: 'title', title: 'Page H1 Title', type: 'string' },
    { name: 'summary', title: 'Top SEO Summary (Short)', type: 'text' },
    { name: 'deepFooter', title: 'Bottom SEO Deep-Dive (Long)', type: 'text' },
    { name: 'metaDescription', title: 'Meta Description', type: 'string' },
    { name: 'keywords', title: 'Keywords (Comma Separated)', type: 'string' },
  ]
}
