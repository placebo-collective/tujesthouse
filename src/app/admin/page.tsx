'use client';

import Link from 'next/link';

export default function AdminPage() {
  return (
    <div
      style={{
        padding: '3rem',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <h1 style={{ color: '#333' }}>Tina CMS Admin Setup Required</h1>

      <div>
        <div
          style={{
            background: '#f0f9ff',
            border: '1px solid #0284c7',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '1.5rem',
          }}
        >
          <h2 style={{ margin: '0 0 1rem 0', color: '#0284c7' }}>Next Steps:</h2>
          <ol style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.8' }}>
            <li>
              <strong>Connect your GitHub repository</strong> to Tina Cloud:
              <br />
              <a
                href="https://app.tina.io/projects/2ab2b105-f031-4c2e-a2cc-1f23f9049e57/configuration"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0284c7' }}
              >
                https://app.tina.io/projects/.../configuration
              </a>
            </li>
            <li>
              <strong>Push your code</strong> to GitHub:
              <pre
                style={{
                  background: '#1e293b',
                  color: '#e2e8f0',
                  padding: '1rem',
                  borderRadius: '4px',
                  overflow: 'auto',
                  marginTop: '0.5rem',
                }}
              >
                {`git add .
git commit -m "Add Tina CMS"
git push origin main`}
              </pre>
            </li>
            <li>
              <strong>Build Tina admin</strong>:
              <pre
                style={{
                  background: '#1e293b',
                  color: '#e2e8f0',
                  padding: '1rem',
                  borderRadius: '4px',
                  marginTop: '0.5rem',
                }}
              >
                npx tinacms build
              </pre>
            </li>
            <li>
              <strong>Restart dev server</strong>:
              <pre
                style={{
                  background: '#1e293b',
                  color: '#e2e8f0',
                  padding: '1rem',
                  borderRadius: '4px',
                  marginTop: '0.5rem',
                }}
              >
                npm run dev:tina
              </pre>
            </li>
          </ol>
        </div>

        <div
          style={{
            background: '#fefce8',
            border: '1px solid #facc15',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '1.5rem',
          }}
        >
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#854d0e' }}>
            Alternative: Edit Files Directly
          </h3>
          <p style={{ margin: 0, lineHeight: '1.6' }}>
            You can edit content by modifying JSON files in the{' '}
            <code
              style={{
                background: '#fff',
                padding: '0.125rem 0.375rem',
                borderRadius: '3px',
              }}
            >
              content/
            </code>{' '}
            folder:
          </p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.8' }}>
            <li>
              <code>content/sections/hero.json</code> - Hero section
            </li>
            <li>
              <code>content/sections/about.json</code> - About section
            </li>
          </ul>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#78716c' }}>
            Changes will reflect immediately when you save the files.
          </p>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              background: '#0284c7',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
