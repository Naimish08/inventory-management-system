# Backend (Express + TypeScript)

This is the backend for the Hackathon Starter Project, built with Express, TypeScript, and Auth.js, using Neon (PostgreSQL) for the database.

## Prerequisites

- Node.js (v18+)
- pnpm (v10+)
- A Neon Database project (PostgreSQL)

## Installation

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Environment Configuration:**
    Create a `.env` file in the `backend` directory with the following variables:

    ```env
    # Database Connection (Neon)
    DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"

    # Auth.js Secret (Required for production, can be any random string)
    AUTH_SECRET="your-auth-secret"
    ```

4.  **Database Setup:**
    Ensure your `users` table has a `password` column:
    ```sql
    ALTER TABLE users ADD COLUMN password TEXT;
    ```

## Scripts

-   **Start Development Server:**
    ```bash
    pnpm dev
    ```
    Runs the server using `ts-node` on `http://localhost:5000`.

## Project Structure

-   `server.ts`: Main entry point. Configures Express, CORS, and Auth.js.
-   `routes/`: API route definitions.
-   `utils/`: Utility functions.
-   `DB_Schema.md`: Documentation of the database schema.

## Database Schema

Refer to [DB_Schema.md](./DB_Schema.md) for the Entity Relationship Diagram and SQL definitions.