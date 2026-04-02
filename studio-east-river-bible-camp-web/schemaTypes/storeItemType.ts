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
      name: 'availableSizes',
      title: 'Sizes (apparel / wearable)',
      description:
        'Leave empty for one-size items (mugs, etc.). When you add sizes, the store requires a size before add to cart.',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Youth XS', value: 'Youth XS'},
              {title: 'Youth S', value: 'Youth S'},
              {title: 'Youth M', value: 'Youth M'},
              {title: 'Youth L', value: 'Youth L'},
              {title: 'Youth XL', value: 'Youth XL'},
              {title: 'Adult XS', value: 'Adult XS'},
              {title: 'Adult S', value: 'Adult S'},
              {title: 'Adult M', value: 'Adult M'},
              {title: 'Adult L', value: 'Adult L'},
              {title: 'Adult XL', value: 'Adult XL'},
              {title: 'Adult 2XL', value: 'Adult 2XL'},
              {title: 'Adult 3XL', value: 'Adult 3XL'},
            ],
            layout: 'dropdown',
          },
        },
      ],
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