import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/server/db/shema.ts',
  out: './src/server/db',
  dialect: 'sqlite',
  dbCredentials: {
    url: 'sqlite.db',
  }
})