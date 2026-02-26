import {defineField, defineType} from 'sanity'

export const costCardType = defineType({
  name: 'costCard',
  title: 'Cost Card',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      type: 'string',
    }),
    defineField({
      name: 'footnoteText',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
})