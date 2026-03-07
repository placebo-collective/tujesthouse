import { defineConfig } from 'tinacms';

const branch =
  process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main';

export default defineConfig({
  branch,
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
  schema: {
    collections: [
      {
        name: 'hero',
        label: 'Sekcja główna (baner)',
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
            label: 'Daty',
            required: true,
          },
          {
            type: 'object',
            name: 'cta',
            label: 'Przyciski CTA',
            fields: [
              {
                type: 'string',
                name: 'primaryText',
                label: 'Tekst głównego przycisku',
              },
              {
                type: 'string',
                name: 'primaryLink',
                label: 'Link głównego przycisku',
              },
              {
                type: 'string',
                name: 'secondaryText',
                label: 'Tekst drugiego przycisku',
              },
              {
                type: 'string',
                name: 'secondaryLink',
                label: 'Link drugiego przycisku',
              },
            ],
          },
        ],
      },
      {
        name: 'about',
        label: 'Sekcja: O projekcie',
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
            label: 'Tytuł',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'intro',
            label: 'Wprowadzenie',
            required: true,
          },
          {
            type: 'object',
            name: 'cards',
            label: 'Karty',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.title || 'Nowa karta',
              }),
            },
            fields: [
              {
                type: 'string',
                name: 'icon',
                label: 'Ikona',
              },
              {
                type: 'string',
                name: 'title',
                label: 'Tytuł',
              },
              {
                type: 'string',
                name: 'description',
                label: 'Opis',
                ui: {
                  component: 'textarea',
                },
              },
            ],
          },
          {
            type: 'object',
            name: 'highlights',
            label: 'Liczby',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.label || 'Nowa liczba',
              }),
            },
            fields: [
              {
                type: 'string',
                name: 'number',
                label: 'Liczba',
              },
              {
                type: 'string',
                name: 'label',
                label: 'Etykieta',
              },
            ],
          },
          {
            type: 'rich-text',
            name: 'funding',
            label: 'Informacja o dofinansowaniu',
          },
        ],
      },
      {
        name: 'cities',
        label: 'Miasta',
        path: 'content/cities',
        format: 'json',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Nazwa miasta',
            required: true,
            isTitle: true,
          },
          {
            type: 'string',
            name: 'date',
            label: 'Data',
            required: true,
          },
          {
            type: 'string',
            name: 'venue',
            label: 'Miejsce',
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
      {
        name: 'program',
        label: 'Sekcja: Program',
        path: 'content/sections',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'program',
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Tytuł',
            required: true,
          },
          {
            type: 'string',
            name: 'subtitle',
            label: 'Podtytuł',
          },
          {
            type: 'object',
            name: 'dayPart',
            label: 'Część dzienna',
            fields: [
              {
                type: 'string',
                name: 'badge',
                label: 'Znacznik',
              },
              {
                type: 'string',
                name: 'title',
                label: 'Tytuł',
              },
              {
                type: 'object',
                name: 'items',
                label: 'Elementy',
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || 'Nowy element',
                  }),
                },
                fields: [
                  {
                    type: 'string',
                    name: 'icon',
                    label: 'Ikona',
                  },
                  {
                    type: 'string',
                    name: 'title',
                    label: 'Tytuł',
                  },
                  {
                    type: 'string',
                    name: 'description',
                    label: 'Opis',
                    ui: {
                      component: 'textarea',
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'nightPart',
            label: 'Część nocna',
            fields: [
              {
                type: 'string',
                name: 'badge',
                label: 'Znacznik',
              },
              {
                type: 'string',
                name: 'title',
                label: 'Tytuł',
              },
              {
                type: 'object',
                name: 'items',
                label: 'Elementy',
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || 'Nowy element',
                  }),
                },
                fields: [
                  {
                    type: 'string',
                    name: 'icon',
                    label: 'Ikona',
                  },
                  {
                    type: 'string',
                    name: 'title',
                    label: 'Tytuł',
                  },
                  {
                    type: 'string',
                    name: 'description',
                    label: 'Opis',
                    ui: {
                      component: 'textarea',
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'target',
            label: 'Dla kogo?',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Tytuł',
              },
              {
                type: 'object',
                name: 'items',
                label: 'Elementy',
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.title || 'Nowy element',
                  }),
                },
                fields: [
                  {
                    type: 'string',
                    name: 'title',
                    label: 'Tytuł',
                  },
                  {
                    type: 'string',
                    name: 'description',
                    label: 'Opis',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'formsSection',
        label: 'Sekcja: Formularze',
        path: 'content/sections',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'forms',
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
          },
          {
            type: 'object',
            name: 'tabs',
            label: 'Zakładki formularzy',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.title || 'Nowa zakładka',
              }),
            },
            fields: [
              {
                type: 'string',
                name: 'id',
                label: 'ID zakładki',
              },
              {
                type: 'string',
                name: 'icon',
                label: 'Ikona',
              },
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'string',
                name: 'subtitle',
                label: 'Subtitle',
              },
            ],
          },
          {
            type: 'object',
            name: 'contact',
            label: 'Sekcja kontaktu',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'string',
                name: 'text',
                label: 'Text',
              },
            ],
          },
        ],
      },
      {
        name: 'header',
        label: 'Nagłówek',
        path: 'content/layout',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'header',
        },
        fields: [
          {
            type: 'object',
            name: 'menu',
            label: 'Elementy menu',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.label || 'Nowy element menu',
              }),
            },
            fields: [
              {
                type: 'string',
                name: 'label',
                label: 'Label',
              },
              {
                type: 'string',
                name: 'href',
                label: 'Link',
              },
            ],
          },
        ],
      },
      {
        name: 'footer',
        label: 'Stopka',
        path: 'content/layout',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'footer',
        },
        fields: [
          {
            type: 'string',
            name: 'copyright',
            label: 'Tekst copyright',
          },
          {
            type: 'string',
            name: 'fundingNote',
            label: 'Informacja o dofinansowaniu',
            ui: {
              component: 'textarea',
            },
          },
        ],
      },
      {
        name: 'djApplication',
        label: 'Formularz zgłoszeniowy artysty',
        path: 'content/forms',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'dj-application',
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
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'object',
            name: 'agreement',
            label: 'Agreement Text',
            fields: [
              {
                type: 'string',
                name: 'text',
                label: 'Tekst główny',
                ui: { component: 'textarea' },
              },
              {
                type: 'string',
                name: 'regulaminLink',
                label: 'Tekst linku do regulaminu',
              },
              {
                type: 'string',
                name: 'consentText',
                label: 'Tekst zgody',
                ui: { component: 'textarea' },
              },
              {
                type: 'string',
                name: 'privacyLink',
                label: 'Privacy Link Text',
              },
            ],
          },
          {
            type: 'object',
            name: 'gdprInfo',
            label: 'Informacja RODO (DJ)',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Tytuł',
              },
              {
                type: 'string',
                name: 'text',
                label: 'Treść',
                ui: { component: 'textarea' },
              },
            ],
          },
          {
            type: 'object',
            name: 'messages',
            label: 'Komunikaty formularza (DJ)',
            fields: [
              {
                type: 'string',
                name: 'success',
                label: 'Komunikat sukcesu',
              },
              {
                type: 'string',
                name: 'error',
                label: 'Komunikat błędu',
              },
              {
                type: 'string',
                name: 'submitting',
                label: 'Komunikat wysyłania',
              },
              {
                type: 'string',
                name: 'submit',
                label: 'Tekst przycisku wysyłania',
              },
            ],
          },
        ],
      },
      {
        name: 'workshopRegistration',
        label: 'Formularz rejestracji na warsztaty',
        path: 'content/forms',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'workshop-registration',
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
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'object',
            name: 'agreement',
            label: 'Tekst zgody (warsztaty)',
            fields: [
              {
                type: 'string',
                name: 'text',
                label: 'Tekst główny',
                ui: { component: 'textarea' },
              },
              {
                type: 'string',
                name: 'privacyLink',
                label: 'Tekst linku do polityki prywatności',
              },
              {
                type: 'string',
                name: 'additionalText',
                label: 'Tekst dodatkowy',
                ui: { component: 'textarea' },
              },
            ],
          },
          {
            type: 'object',
            name: 'gdprInfo',
            label: 'Informacja RODO (warsztaty)',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Tytuł',
              },
              {
                type: 'string',
                name: 'text',
                label: 'Treść',
                ui: { component: 'textarea' },
              },
            ],
          },
          {
            type: 'object',
            name: 'messages',
            label: 'Komunikaty formularza (warsztaty)',
            fields: [
              {
                type: 'string',
                name: 'success',
                label: 'Komunikat sukcesu',
              },
              {
                type: 'string',
                name: 'error',
                label: 'Komunikat błędu',
              },
              {
                type: 'string',
                name: 'submitting',
                label: 'Komunikat wysyłania',
              },
              {
                type: 'string',
                name: 'submit',
                label: 'Tekst przycisku wysyłania',
              },
            ],
          },
        ],
      },
    ],
  },
});
