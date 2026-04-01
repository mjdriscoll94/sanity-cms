import {defineField, defineType} from 'sanity'

export const storeItemType = defineType({
  name: 'storeItem',
  title: 'Store Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'year',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'itemName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'itemDescription',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'itemPrice',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageFront',
      type: 'image',
    }),
    defineField({
      name: 'imageBack',
      type: 'image',
    }),
    defineField({
      name: 'imageOther',
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