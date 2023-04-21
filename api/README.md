# Flashcards Api

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Reset database: `npm run db:reset`
5. Run the server `npm run start`, run the server with nodemon: `npm run dev`

- Note: when nodemon is used you should not have to restart your server when edits are made

## Warnings & Tips

- Use the `npm run db:reset` command each time there is a change to the database schema or seeds.
  - It runs through each of the files, in order, and executes them against the database.
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- chalk
- dotenv
- express
- javascript-time-ago
- morgan
- cors
- pg
