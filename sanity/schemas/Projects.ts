import { defineField, defineType } from 'sanity';

export const Projects = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'liveUrl',
      title: 'LiveURL',
      type: 'string',
    }),defineField({
      name: 'playstoreUrl',
      title: 'Play Store Url',
      type: 'string',
    }),defineField({
      name: 'appstoreUrl',
      title: 'App Store Url',
      type: 'string',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GithubURL',
      type: 'string',
    }),
    defineField({
  name: 'techStack',
  title: 'TechStack',
  type: 'array',
  of: [{ type: 'reference', to: [{ type: 'technologies' }] }],
}),
    defineField({
  name: 'images',
  title: 'Images',
  type: 'array',
  of: [
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }),
      ],
    },
  ],
}),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
