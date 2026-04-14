// studio/schemas/essentials.ts
// Add this to your Sanity studio schemas

export default {
  name: 'essentials',
  title: 'SA Essentials (Prices & Calculators)',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category Key',
      type: 'string',
      options: {
        list: ['fuel', 'groceries', 'travel', 'utilities'],
      },
    },
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Top Summary (SEO)',
      type: 'text',
    },
    {
      name: 'lastUpdated',
      title: 'Prices Last Updated',
      type: 'datetime',
    },
    // Fuel Prices
    {
      name: 'fuelPrices',
      title: 'Current Fuel Prices (ZAR per litre)',
      type: 'object',
      fields: [
        { name: 'unleaded95', title: 'Unleaded 95 (Inland)', type: 'number' },
        { name: 'unleaded93', title: 'Unleaded 93 (Coastal)', type: 'number' },
        { name: 'diesel50ppm', title: 'Diesel 50ppm', type: 'number' },
        { name: 'effectiveDate', title: 'Price Effective Date', type: 'string' },
      ],
    },
    // Grocery Basket Prices
    {
      name: 'groceryItems',
      title: 'Grocery Basket Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Item Name', type: 'string' },
            { name: 'unit', title: 'Unit (e.g. per 2L, per dozen)', type: 'string' },
            { name: 'price', title: 'Average Price (ZAR)', type: 'number' },
            { name: 'icon', title: 'Emoji Icon', type: 'string' },
          ],
        },
      ],
    },
    // Car Tank Sizes (for fuel calculator)
    {
      name: 'commonCarTanks',
      title: 'Common SA Car Tank Sizes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'make', title: 'Make & Model', type: 'string' },
            { name: 'tankLitres', title: 'Tank Size (litres)', type: 'number' },
            { name: 'avgConsumption', title: 'Avg Consumption (L/100km)', type: 'number' },
          ],
        },
      ],
    },
    // Route distances for travel calculator
    {
      name: 'popularRoutes',
      title: 'Popular SA Routes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'from', title: 'From', type: 'string' },
            { name: 'to', title: 'To', type: 'string' },
            { name: 'distanceKm', title: 'Distance (km)', type: 'number' },
            { name: 'tollsZar', title: 'Estimated Tolls (ZAR)', type: 'number' },
          ],
        },
      ],
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'q', title: 'Question', type: 'string' },
            { name: 'a', title: 'Answer', type: 'text' },
          ],
        },
      ],
    },
  ],
}
