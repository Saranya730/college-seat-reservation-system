# College Seat Reservation System

A full-stack web application for managing college seat reservations. Students can register and log in to access the portal; administrators can view all registered users from a secure admin dashboard.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, React Router v6, Axios, CSS |
| Backend | Node.js, Express 5, Mongoose 8 |
| Database | MongoDB (local or Atlas) |
| Security | bcryptjs (password hashing), dotenv (env config) |

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [MongoDB](https://www.mongodb.com/try/download/community) running locally **or** a MongoDB Atlas connection string

---

## Project Structure

```
college-seat-reservation-system/
├── back/               # Express + MongoDB backend
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env.example    # Copy to .env and fill in values
│   └── package.json
├── front/              # React frontend
│   ├── public/
│   ├── src/
│   │   └── components/
│   └── package.json
├── portfolio.html      # Static portfolio page
└── README.md
```

---

## Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd college-seat-reservation-system
```

### 2. Configure the backend environment

```bash
cd back
cp .env.example .env
```

Open `back/.env` and set your values:

```env
MONGO_URI=mongodb://127.0.0.1:27017/adminUserDB
PORT=5000
ADMIN_EMAIL=your-admin-email@example.com
ADMIN_PASSWORD=your-secure-admin-password
```

> ⚠️ Never commit `.env`. It is already listed in `.gitignore`.

### 3. Install backend dependencies

```bash
# inside back/
npm install
```

### 4. Install frontend dependencies

```bash
cd ../front
npm install
```

---

## Running the Application

Open **two terminal windows**:

**Terminal 1 — Backend:**
```bash
cd back
npm start          # production
# or
npm run dev        # development (auto-restarts with nodemon)
```

The API will be available at `http://localhost:5000`.

**Terminal 2 — Frontend:**
```bash
cd front
npm start
```

The React app will open at `http://localhost:3000`.

---

## Application Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Register | New user registration |
| `/login` | Login | Student login |
| `/admin-login` | Admin Login | Administrator login (server-side auth) |
| `/admin` | Admin Dashboard | View all registered users |
| `/home` | Home | Post-login landing page |

---

## Security Notes

- User passwords are hashed with **bcryptjs** before storage — plain-text passwords are never saved.
- Admin credentials are stored **only in the backend `.env`** file and are never exposed in source code or frontend bundles.
- The `.env` file is `.gitignore`d and will never be committed to Git.

---

## Available Scripts

### Backend (`back/`)

| Command | Description |
|---------|-------------|
| `npm start` | Start the Express server |
| `npm run dev` | Start with nodemon (auto-reload) |

### Frontend (`front/`)

| Command | Description |
|---------|-------------|
| `npm start` | Start the React dev server |
| `npm run build` | Build for production |
| `npm test` | Run tests |

---

## Notes

- Existing users registered before bcrypt was added will need to re-register.
- For production deployment, replace the local MongoDB URI with a [MongoDB Atlas](https://www.mongodb.com/atlas) connection string and set a strong `ADMIN_PASSWORD`.
