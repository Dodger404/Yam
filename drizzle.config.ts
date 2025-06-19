//import { defineConfig } from 'drizzle-kit';

import { defineConfig } from "next/dist/experimental/testmode/playwright";

export default defineConfig({
  schema: './src/server/db/shema.ts',
  out: './src/server/db',
  dialect: 'sqlite',
  dbCredentials: {
    url: 'sqlite.db',
  }
})