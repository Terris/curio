# Curio

## Apps

- `api`: an [Express](https://expressjs.com/) server
- `web`: a [Next.js](https://nextjs.org/) app
- `admin`: a [Vite](https://vitejs.dev/) single page app

## Packages

- `database`: prisma client and database migrations
- `logger`: isomorphic logger (a small wrapper around console.log)
- `ui`: a React UI library
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json;s used throughout the monorepo

## Database

### Run postgres locally with docker

```sh
docker compose up
```

### Create a database migration

```sh
turbo db:migrate -- --name added_users_table
```
