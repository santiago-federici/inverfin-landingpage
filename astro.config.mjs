import { defineConfig, envField } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    env: {
      schema: {
        RESEND_API_KEY: envField.string({
          context: 'server',
          access: 'secret',

        }),
      }
    }
  },
  // output: "server",
  integrations: [tailwind(), react()],
});