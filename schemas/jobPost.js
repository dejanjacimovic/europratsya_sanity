export default {
  name: 'job_post',
  title: 'Job Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'multilingualTitle',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
    },
    {
      name: 'employer',
      title: 'Employer',
      type: 'reference',
      to: { type: 'company' },
      validation: Rule => Rule.required(),
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'country',
      title: 'Country',
      type: 'reference',
      to: { type: 'country' },
      validation: Rule => Rule.required(),
    },
    {
      name: 'contact',
      title: 'Contact (email or URL)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'salary',
      title: 'Salary',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'job_categories',
      title: 'Job Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'job_category' } }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'job_languages',
      title: 'One required language',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'language' } }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'validUntil',
      title: 'Valid until',
      type: 'datetime',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'multilingualDescription',
    },
    {
      name: 'seo',
      title: 'SEO Tags',
      type: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
  orderings: [
    {
      title: 'Newest',
      name: 'createdAtDesc',
      by: [
        {field: 'createdAt', direction: 'desc'}
      ]
    },
    {
      title: 'Oldest',
      name: 'creatdAtAsc',
      by: [
        {field: 'createdAt', direction: 'asc'}
      ]
    },
    {
      title: 'Title',
      name: 'englishTitle',
      by: [
        {field: 'title.en', direction: 'asc'}
      ]
    }
  ],
};
