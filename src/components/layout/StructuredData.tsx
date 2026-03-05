import { BASE_URL, SITE_NAME, SITE_DESCRIPTION, CONTACT_EMAIL, CITIES } from '../../lib/constants';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: BASE_URL,
    email: CONTACT_EMAIL,
    foundingDate: '2026',
    logo: `${BASE_URL}/logo.png`,
    sameAs: [
      // Add social media links when available
      // 'https://www.facebook.com/tujesthouse',
      // 'https://www.instagram.com/tujesthouse',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PL',
    },
  };

  const eventSeriesSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventSeries',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: BASE_URL,
    organizer: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    location: CITIES.map((city) => ({
      '@type': 'Place',
      name: city.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name,
        addressCountry: 'PL',
      },
    })),
    eventSchedule: {
      '@type': 'Schedule',
      scheduleTimezone: 'Europe/Warsaw',
      startDate: '2026-05',
      endDate: '2026-09',
      repeatFrequency: 'P1M',
    },
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: BASE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: 'pl-PL',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSeriesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
