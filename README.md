# Scheme Navigator

Scheme Navigator is a simple full-stack web application that helps users find relevant government schemes based on their basic personal and educational information.

This was my first full-stack project, built to learn and practice frontend development, backend development, PostgreSQL, API handling, and working with structured data.

## Features

* Collect user information through a form
* Find relevant government schemes based on user input
* Display matching schemes
* View detailed information about a selected scheme
* Display eligibility criteria
* Display required documents
* Display application process
* JSON-based scheme details

## Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### Data

* JSON

## How to Use

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd Scheme-Navigator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and add your PostgreSQL configuration.

### 4. Setup the database

Create a PostgreSQL database and create the `schemes` table using the structure mentioned below.

### 5. Start the application

```bash
npm start
```

The application will run on:

```text
http://localhost:4000
```

## Environment Variables

Create a `.env` file:

```env
PORT=4000

PGHOST=localhost
PGPORT=5432
PGUSER=postgres
PGPASSWORD=your_postgresql_password
PGDATABASE=schemeNevigator
```

> Never commit your `.env` file or database credentials to GitHub.

Add the following to `.gitignore`:

```gitignore
.env
node_modules/
```

## Database Structure

The project currently uses a single PostgreSQL table named `schemes`.

| Column           | Type               | Description                     |
| ---------------- | ------------------ | ------------------------------- |
| `scheme_id`      | SERIAL PRIMARY KEY | Unique scheme ID                |
| `scheme_name`    | TEXT NOT NULL      | Name of the scheme              |
| `gender`         | TEXT[]             | Eligible genders                |
| `state`          | TEXT[]             | Eligible states                 |
| `category`       | TEXT[]             | Eligible categories             |
| `qualification`  | TEXT NOT NULL      | Required qualification          |
| `family_income`  | INTEGER            | Family income criteria          |
| `disability`     | INTEGER            | Disability eligibility flag     |
| `extra_criteria` | JSONB              | Additional eligibility criteria |
| `created_at`     | TIMESTAMP          | Record creation timestamp       |

Detailed scheme information such as documents, eligibility criteria, and application process is maintained separately in JSON files.
