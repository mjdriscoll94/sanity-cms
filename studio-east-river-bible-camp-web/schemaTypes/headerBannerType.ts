import {defineField, defineType} from 'sanity'

export const headerBannerType = defineType({
  name: 'headerBanner',
  title: 'Header Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headingOne',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headingTwo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headingThree',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'paragraph',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
})