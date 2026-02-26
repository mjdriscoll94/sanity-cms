import {defineField, defineType} from 'sanity'

export const directorType = defineType({
  name: 'director',
  title: 'Director',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'displayName',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
})