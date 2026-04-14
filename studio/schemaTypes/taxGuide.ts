
export default {
  name: 'taxGuide',
  title: 'Tax Guide (Lead Magnet)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Guide Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Guide Description', type: 'text' },
    { name: 'icon', title: 'Lucide Icon Name', type: 'string' },
    { name: 'checklistItems', title: 'Checklist Items', type: 'array', of: [{ type: 'string' }] },
    { name: 'pdfUrl', title: 'PDF Download URL', type: 'url' },
  ]
}
