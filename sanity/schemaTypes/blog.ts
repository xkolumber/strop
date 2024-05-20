export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Nadpis',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Titulná fotka',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'content',
      type: 'array',
      title: 'Popis',
      of: [{type: 'block'}],
    },
    {
      name: 'photo2',
      type: 'image',
      title: 'Fotka 2',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'photo3',
      type: 'image',
      title: 'Fotka 3',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'content2',
      type: 'array',
      title: 'Popis 2',
      of: [{type: 'block'}],
    },

    {
      name: 'photo4',
      type: 'image',
      title: 'Fotka 4',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content3',
      type: 'array',
      title: 'Popis 3',
      of: [{type: 'block'}],
    },
    {
      name: 'photo5',
      type: 'image',
      title: 'Fotka 5',
      options: {
        hotspot: true,
      },
    },
  ],
}
