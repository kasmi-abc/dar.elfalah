# Dar El Fallah — Online Bookstore

Arabic-first (RTL) online bookstore with French and English, cash-on-delivery orders across 58 Algerian wilayas, and a full admin dashboard.

**Stack:** Next.js 16 · React 19 · Tailwind CSS 4 · Auth.js · Drizzle ORM · Neon PostgreSQL · lucide-react

## Quick start

```bash
npm install
cp .env.example .env.local    # then fill DATABASE_URL, NEXTAUTH_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD
npm run dev                   # http://localhost:3000
npm run build && npm start    # production build
```

- Admin panel: `/admin` (credentials from `.env.local`).
- Without `DATABASE_URL` the store runs on bundled seed data + browser storage.
- Book images live in `public/books`.

**Version:** 1.0.0
