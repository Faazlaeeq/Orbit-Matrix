import { defineField, defineType } from 'sanity';

export const Technologies = defineType({
  name: 'technologies',
  title: 'Technologies',
  type: 'document',
  fields: [
    defineField({
      name: 'technology',
      title: 'technology',
      type: 'string',
    }),
    defineField({
      name:'logo',
      title: 'logo',
      type: 'image',

})
  ],
});
