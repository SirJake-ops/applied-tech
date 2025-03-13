# Applied Tech

A Next.js application using modern React and TypeScript with Tailwind CSS for styling.

## Prerequisites

- Node.js 18+
- Docker Desktop
- npm or yarn

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update values as needed
```bash
copy .env.example .env
```

3. Start the PostgreSQL database:
```bash
docker-compose up -d
```

4. Set up the database schema:
```bash
npx prisma generate
npx prisma db push
```

5. Start development server:
```bash
npm run dev
```

Access the app at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
applied-tech/
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   ├── modals/        # Modal components
│   │   └── page.tsx       # Main page
│   └── lib/              # Utility functions
├── prisma/
│   └── schema.prisma     # Database schema
└── docker-compose.yml    # Docker configuration
```

## Features

- Contact form with email notifications
- PostgreSQL database integration
- Server-side rendering with Next.js
- Responsive design with Tailwind CSS
- Dark mode support
- TypeScript for type safety

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run ESLint checks
- `npx prisma studio` - Open database GUI

## Database Management

- View/manage data: `npx prisma studio`
- Update schema: `npx prisma db push`
- Reset database: `npx prisma db reset`

## Environment Variables

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/contact?schema=public
SENDGRID_API_KEY=your-sendgrid-api-key
NOTIFICATION_EMAIL=your-email@example.com
FROM_EMAIL=noreply@yourdomain.com
```

## Docker Commands

- Start database: `docker-compose up -d`
- Stop database: `docker-compose down`
- View logs: `docker-compose logs -f`
- Reset volume: `docker-compose down -v`

## Tech Stack

- Next.js 14
- React 18
- TypeScript 5
- Tailwind CSS 3
- Prisma ORM
- PostgreSQL
- SendGrid Email

## Contributing

1. Create feature branch
2. Make changes
3. Run tests
4. Submit pull request

## Troubleshooting

- **Database connection issues**: Ensure Docker is running and ports are free
- **Schema errors**: Run `npx prisma generate` after schema changes
- **Email not sending**: Verify SendGrid API key and environment variables