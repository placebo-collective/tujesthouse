import { dirname } from 'path';
import { fileURLToPath } from 'url';
import nextPlugin from 'eslint-config-next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'out/**',
      'node_modules/**',
      'build/**',
      '.tina/**',
      'tina/__generated__/**',
    ],
  },
  ...nextPlugin,
];

export default eslintConfig;
