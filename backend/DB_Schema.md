# Database Schema

## Entity Relationship Diagram

```mermaid
erDiagram
    users ||--o{ accounts : "has"
    users ||--o{ sessions : "has"

    users {
        integer id PK
        varchar name
        varchar email
        timestamp emailVerified
        text image
        text password
    }

    accounts {
        integer id PK
        integer userId FK
        varchar type
        varchar provider
        varchar providerAccountId
        text refresh_token
        text access_token
        bigint expires_at
        text id_token
        text scope
        text session_state
        text token_type
    }

    sessions {
        integer id PK
        integer userId FK
        timestamp expires
        varchar sessionToken
    }

    verification_token {
        text identifier PK
        text token PK
        timestamp expires
    }
```

## SQL Definitions

```sql
CREATE TABLE verification_token
(
  identifier TEXT NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  token TEXT NOT NULL,
 
  PRIMARY KEY (identifier, token)
);
 
CREATE TABLE accounts
(
  id SERIAL,
  "userId" INTEGER NOT NULL,
  type VARCHAR(255) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  "providerAccountId" VARCHAR(255) NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at BIGINT,
  id_token TEXT,
  scope TEXT,
  session_state TEXT,
  token_type TEXT,
 
  PRIMARY KEY (id)
);
 
CREATE TABLE sessions
(
  id SERIAL,
  "userId" INTEGER NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  "sessionToken" VARCHAR(255) NOT NULL,
 
  PRIMARY KEY (id)
);
 
CREATE TABLE users
(
  id SERIAL,
  name VARCHAR(255),
  email VARCHAR(255),
  "emailVerified" TIMESTAMPTZ,
  image TEXT,
  password TEXT,
 
  PRIMARY KEY (id)
);
```