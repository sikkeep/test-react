// next.config.mjs

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Resolve alias @ to the root directory
    config.resolve.alias['@'] = __dirname;
    config.externals = [...config.externals, 'bcrypt'];

    return config;
  },
};

export default nextConfig;
