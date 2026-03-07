import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main';

export default defineConfig({
  branch,

  // Self-hosted / local mode (no cloud required)
  // Leave these empty for local development
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'tina-admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === 'home') {
              return '/';
            }
            return undefined;
          },
        },
      },
      {
        name: 'hero',
        label: 'Hero Section',
        path: 'content/sections',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'hero',
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true,
          },
          {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'dates',
            label: 'Dates',
            required: true,
          },
          {
            type: 'object',
            name: 'cta',
            label: 'Call to Action Buttons',
            fields: [
              {
                type: 'string',
                name: 'primaryText',
                label: 'Primary Button Text',
              },
              {
                type: 'string',
                name: 'primaryLink',
                label: 'Primary Button Link',
              },
              {
                type: 'string',
                name: 'secondaryText',
                label: 'Secondary Button Text',
              },
              {
                type: 'string',
                name: 'secondaryLink',
                label: 'Secondary Button Link',
              },
            ],
          },
        ],
      },
      {
        name: 'about',
        label: 'About Section',
        path: 'content/sections',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'about',
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'content',
            label: 'Content',
            required: true,
          },
        ],
      },
      {
        name: 'cities',
        label: 'Cities',
        path: 'content/cities',
        format: 'json',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'City Name',
            required: true,
            isTitle: true,
          },
          {
            type: 'string',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'string',
            name: 'venue',
            label: 'Venue',
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
          },
        ],
      },
    ],
  },
});
