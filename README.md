# Hackathon Starter Project

A robust starter template designed for hackathons, featuring a modern **Next.js** frontend and a scalable **Express/Node.js** backend. This project comes pre-configured with authentication, database connectivity, and a clean architecture to help you hit the ground running.

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: TypeScript

### Backend
- **Runtime**: Node.js
- **Framework**: [Express.js](https://expressjs.com/)
- **Language**: TypeScript
- **Database**: [Neon](https://neon.tech/) (Serverless PostgreSQL)
- **Authentication**: [Auth.js](https://authjs.dev/) (Configured with Neon Adapter)

## 🚀 Getting Started

### Prerequisites
- **Node.js** (Latest LTS recommended)
- **pnpm** (Package manager)

### Installation & Running

#### 1. Backend Setup
Navigate to the backend directory, install dependencies, and start the development server.

```bash
cd backend
pnpm install
pnpm dev
```
The backend server will start on `http://localhost:5000`.

#### 2. Frontend Setup
Navigate to the frontend directory, install dependencies, and start the development server.

```bash
cd frontend
pnpm install
pnpm dev
```
The frontend application will be available at `http://localhost:3000`.

## 🔐 Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
AUTH_SECRET="your-auth-secret"
```

## 📡 API Documentation

### Authentication Endpoints

Authentication is handled by **Auth.js**. The following endpoints are available (mounted at `/auth`):

-   **Sign In**: `/auth/signin` (UI) or `/auth/signin/credentials` (API)
-   **Sign Out**: `/auth/signout`
-   **Session**: `/auth/session`
-   **CSRF Token**: `/auth/csrf`

Refer to the [Auth.js REST API documentation](https://authjs.dev/reference/core/rest-api) for more details.

## 🗄 Database Schema

For a detailed view of the database schema and entity relationships, please refer to [DB_Schema.md](./backend/DB_Schema.md).
