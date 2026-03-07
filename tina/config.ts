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
            label: 'Tytuł',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'subtitle',
            label: 'Podtytuł',
            required: true,
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
            isBody: true,
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
                type: 'rich-text',
                name: 'description',
                label: 'Opis',
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
            isBody: true,
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
                    type: 'rich-text',
                    name: 'description',
                    label: 'Opis',
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
                    type: 'rich-text',
                    name: 'description',
                    label: 'Opis',
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
        name: 'cities',
        label: 'Sekcja: Miasta',
        path: 'content/sections',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'cities',
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
            name: 'cities',
            label: 'Lista miast',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.name || 'Nowe miasto',
              }),
            },
            fields: [
              {
                type: 'string',
                name: 'name',
                label: 'Nazwa miasta',
                required: true,
              },
              {
                type: 'string',
                name: 'month',
                label: 'Miesiąc',
                required: true,
              },
              {
                type: 'string',
                name: 'venue',
                label: 'Miejsce wydarzenia',
                required: true,
              },
            ],
          },
          {
            type: 'object',
            name: 'infoCards',
            label: 'Karty informacyjne',
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
                type: 'rich-text',
                name: 'description',
                label: 'Opis',
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
                label: 'Tytuł',
              },
              {
                type: 'string',
                name: 'subtitle',
                label: 'Podtytuł',
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
                label: 'Tytuł',
              },
              {
                type: 'string',
                name: 'text',
                label: 'Tekst',
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
                label: 'Etykieta',
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
            type: 'rich-text',
            name: 'description',
            label: 'Opis',
            isBody: true,
          },
          {
            type: 'object',
            name: 'organizers',
            label: 'Organizatorzy',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Tytuł',
              },
              {
                type: 'object',
                name: 'main',
                label: 'Organizator główny',
                fields: [
                  { type: 'string', name: 'name', label: 'Nazwa' },
                  { type: 'string', name: 'address', label: 'Adres' },
                  { type: 'string', name: 'nip', label: 'NIP' },
                ],
              },
              {
                type: 'object',
                name: 'partner',
                label: 'Partner',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  { type: 'string', name: 'name', label: 'Nazwa' },
                  { type: 'string', name: 'address', label: 'Adres' },
                  { type: 'string', name: 'nip', label: 'NIP' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'contact',
            label: 'Kontakt',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Tytuł',
              },
              {
                type: 'string',
                name: 'gdprLabel',
                label: 'Etykieta RODO',
              },
            ],
          },
          {
            type: 'object',
            name: 'documents',
            label: 'Dokumenty',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Tytuł',
              },
              {
                type: 'object',
                name: 'links',
                label: 'Linki',
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.label || 'Nowy link',
                  }),
                },
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  { type: 'string', name: 'href', label: 'Link' },
                ],
              },
            ],
          },
          {
            type: 'string',
            name: 'copyright',
            label: 'Tekst copyright',
          },
          {
            type: 'rich-text',
            name: 'fundingNote',
            label: 'Informacja o dofinansowaniu',
            isBody: true,
          },
        ],
      },
      {
        name: 'artistApplication',
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
          include: 'artist-application',
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
            name: 'description',
            label: 'Opis',
            isBody: true,
          },
          {
            type: 'object',
            name: 'fields',
            label: 'Pola formularza',
            fields: [
              {
                type: 'object',
                name: 'name',
                label: 'Pole: Imię i nazwisko',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
              {
                type: 'object',
                name: 'artistName',
                label: 'Pole: Pseudonim artystyczny',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
              {
                type: 'object',
                name: 'email',
                label: 'Pole: Email',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
              {
                type: 'object',
                name: 'phone',
                label: 'Pole: Telefon',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
              {
                type: 'object',
                name: 'city',
                label: 'Pole: Preferowane miasto (1. wybór)',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  { type: 'string', name: 'placeholder', label: 'Placeholder' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
              {
                type: 'object',
                name: 'city2',
                label: 'Pole: Preferowane miasto (2. wybór)',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  { type: 'string', name: 'placeholder', label: 'Placeholder' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
              {
                type: 'object',
                name: 'soundcloudLink',
                label: 'Pole: Link do nagrania',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  { type: 'string', name: 'placeholder', label: 'Placeholder' },
                  { type: 'string', name: 'hint', label: 'Podpowiedź' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
              {
                type: 'object',
                name: 'experience',
                label: 'Pole: Doświadczenie',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  {
                    type: 'string',
                    name: 'placeholder',
                    label: 'Placeholder',
                    ui: { component: 'textarea' },
                  },
                  { type: 'number', name: 'rows', label: 'Liczba wierszy' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
              {
                type: 'object',
                name: 'description',
                label: 'Pole: Opis stylu muzycznego',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  {
                    type: 'string',
                    name: 'placeholder',
                    label: 'Placeholder',
                    ui: { component: 'textarea' },
                  },
                  { type: 'number', name: 'maxLength', label: 'Maksymalna długość' },
                  { type: 'number', name: 'rows', label: 'Liczba wierszy' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'agreement',
            label: 'Tekst zgody',
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
            label: 'Informacja RODO (artysta)',
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
            label: 'Komunikaty formularza (artysta)',
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
            label: 'Tytuł',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'description',
            label: 'Opis',
            isBody: true,
          },
          {
            type: 'object',
            name: 'fields',
            label: 'Pola formularza',
            fields: [
              {
                type: 'object',
                name: 'name',
                label: 'Pole: Imię i nazwisko',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
              {
                type: 'object',
                name: 'email',
                label: 'Pole: Email',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
              {
                type: 'object',
                name: 'phone',
                label: 'Pole: Telefon',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
              {
                type: 'object',
                name: 'city',
                label: 'Pole: Miasto wydarzenia',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  { type: 'string', name: 'placeholder', label: 'Placeholder' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
              {
                type: 'object',
                name: 'role',
                label: 'Pole: Kim jesteś w branży?',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  { type: 'string', name: 'placeholder', label: 'Placeholder' },
                  { type: 'string', name: 'hint', label: 'Podpowiedź' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                  {
                    type: 'object',
                    name: 'options',
                    label: 'Opcje do wyboru',
                    list: true,
                    ui: {
                      itemProps: (item) => ({
                        label: item?.label || 'Nowa opcja',
                      }),
                    },
                    fields: [
                      { type: 'string', name: 'value', label: 'Wartość' },
                      { type: 'string', name: 'label', label: 'Etykieta' },
                    ],
                  },
                ],
              },
              {
                type: 'object',
                name: 'experience',
                label: 'Pole: Doświadczenie w branży',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  {
                    type: 'string',
                    name: 'placeholder',
                    label: 'Placeholder',
                    ui: { component: 'textarea' },
                  },
                  { type: 'number', name: 'rows', label: 'Liczba wierszy' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
              {
                type: 'object',
                name: 'motivation',
                label: 'Pole: Motywacja',
                fields: [
                  { type: 'string', name: 'label', label: 'Etykieta' },
                  {
                    type: 'string',
                    name: 'placeholder',
                    label: 'Placeholder',
                    ui: { component: 'textarea' },
                  },
                  { type: 'number', name: 'rows', label: 'Liczba wierszy' },
                  { type: 'boolean', name: 'required', label: 'Wymagane' },
                ],
              },
            ],
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
      {
        name: 'siteSettings',
        label: 'Ustawienia strony',
        path: 'content/layout',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'settings',
        },
        fields: [
          {
            type: 'string',
            name: 'siteName',
            label: 'Nazwa strony',
            required: true,
            description: 'Nazwa wyświetlana w nagłówku (gdy logo jest wyłączone) i meta tagach',
          },
          {
            type: 'boolean',
            name: 'useLogo',
            label: 'Użyj logo zamiast tekstu',
            description: 'Włącz, aby wyświetlać logo graficzne zamiast tekstu w nagłówku',
          },
          {
            type: 'image',
            name: 'logo',
            label: 'Logo strony',
            description: 'Graficzne logo wyświetlane w nagłówku (PNG/SVG, zalecana wysokość 40-60px)',
          },
          {
            type: 'image',
            name: 'favicon',
            label: 'Ikona strony (favicon)',
            description: 'Ikona wyświetlana w zakładce przeglądarki (ICO/PNG, 32x32px)',
          },
          {
            type: 'object',
            name: 'theme',
            label: 'Motyw kolorystyczny',
            description: 'Kolory używane na stronie',
            fields: [
              {
                type: 'string',
                name: 'primaryColor',
                label: 'Kolor główny',
                description: 'Główny kolor akcentowy (hex, np. #e63946)',
                ui: {
                  component: 'color',
                },
              },
              {
                type: 'string',
                name: 'secondaryColor',
                label: 'Kolor drugorzędny',
                description: 'Drugorzędny kolor akcentowy (hex, np. #a41623)',
                ui: {
                  component: 'color',
                },
              },
              {
                type: 'string',
                name: 'accentGold',
                label: 'Kolor złoty (akcent)',
                description: 'Kolor złoty używany do akcentów (hex, np. #ffd700)',
                ui: {
                  component: 'color',
                },
              },
              {
                type: 'string',
                name: 'darkBg',
                label: 'Ciemne tło',
                description: 'Główne ciemne tło (hex, np. #1a1a1a)',
                ui: {
                  component: 'color',
                },
              },
              {
                type: 'string',
                name: 'darkBg2',
                label: 'Ciemne tło 2',
                description: 'Drugorzędne ciemne tło (hex, np. #2d2d2d)',
                ui: {
                  component: 'color',
                },
              },
              {
                type: 'string',
                name: 'lightBg',
                label: 'Jasne tło',
                description: 'Jasne tło (hex, np. #f5f5f5)',
                ui: {
                  component: 'color',
                },
              },
              {
                type: 'string',
                name: 'textDark',
                label: 'Ciemny tekst',
                description: 'Kolor ciemnego tekstu (hex, np. #2d2d2d)',
                ui: {
                  component: 'color',
                },
              },
              {
                type: 'string',
                name: 'textLight',
                label: 'Jasny tekst',
                description: 'Kolor jasnego tekstu (hex, np. #ffffff)',
                ui: {
                  component: 'color',
                },
              },
              {
                type: 'string',
                name: 'borderColor',
                label: 'Kolor obramowania',
                description: 'Kolor obramowań (rgba, np. rgba(230, 57, 70, 0.2))',
              },
              {
                type: 'string',
                name: 'navBgStart',
                label: 'Tło nawigacji - początek',
                description: 'Początkowy kolor gradientu tła nawigacji (rgba)',
              },
              {
                type: 'string',
                name: 'navBgEnd',
                label: 'Tło nawigacji - koniec',
                description: 'Końcowy kolor gradientu tła nawigacji (rgba)',
              },
            ],
          },
        ],
      },
      {
        name: 'privacyPolicy',
        label: 'Polityka Prywatności',
        path: 'content/pages',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'privacy-policy',
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Tytuł strony',
            required: true,
          },
          {
            type: 'string',
            name: 'metaDescription',
            label: 'Meta opis (SEO)',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'lastUpdated',
            label: 'Data ostatniej aktualizacji',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'content',
            label: 'Treść polityki prywatności',
            required: true,
            description: 'Pełna treść polityki prywatności (wspiera formatowanie Markdown). Uwaga: używaj zwykłych cudzysłowów ("), nie polskich („")',
            isBody: true,
          },
        ],
      },
      {
        name: 'termsAndConditions',
        label: 'Regulamin',
        path: 'content/pages',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'terms-and-conditions',
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Tytuł strony',
            required: true,
          },
          {
            type: 'string',
            name: 'metaDescription',
            label: 'Meta opis (SEO)',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'lastUpdated',
            label: 'Data ostatniej aktualizacji',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'content',
            label: 'Treść regulaminu',
            required: true,
            description: 'Pełna treść regulaminu (wspiera formatowanie Markdown). Uwaga: używaj zwykłych cudzysłowów ("), nie polskich („")',
            isBody: true,
          },
        ],
      },
    ],
  },
});
