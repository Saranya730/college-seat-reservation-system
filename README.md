# College Seat Reservation System

A full-stack web application built to manage student registration and login, with an administrator dashboard to view registered users. The application uses React for the frontend, Node.js and Express for the backend, and MongoDB for data storage.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, React Router v6, Axios, CSS |
| Backend | Node.js, Express 5 |
| Database | MongoDB, Mongoose 8 |
| Security | bcryptjs, dotenv |
| Version Control | Git, GitHub |

## Features

- Student registration and login
- Admin login with backend-side credential verification
- Admin dashboard to view registered users
- Password hashing using bcryptjs
- Environment-based configuration for database and admin credentials
- React-based user interface
- MongoDB integration using Mongoose

## Project Structure

```text
college-seat-reservation-system/
├── back/
│   ├── models/
│   │   └── UserModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── server.js
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
├── front/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── package-lock.json
├── .gitignore
├── README.md
└── package-lock.json
```

## Prerequisites

Install the following before running the application:

- [Node.js](https://nodejs.org/) v18 or later
- npm (included with Node.js)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) for local database use, or a [MongoDB Atlas](https://www.mongodb.com/atlas) account for cloud database use

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Saranya730/college-seat-reservation-system.git
cd college-seat-reservation-system
```

### 2. Configure the Backend

Navigate to the backend folder:

```bash
cd back
```

Create a `.env` file from the example.

**Windows Command Prompt:**

```cmd
copy .env.example .env
```

**macOS / Linux / Git Bash:**

```bash
cp .env.example .env
```

Open `back/.env` and configure the environment variables.

#### Option A: Local MongoDB

Make sure MongoDB is installed and running on your computer.

```env
MONGO_URI=mongodb://127.0.0.1:27017/adminUserDB
PORT=5000
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=replace-with-a-strong-password
```

#### Option B: MongoDB Atlas

Create a MongoDB Atlas cluster, configure a database user and network access, and copy your cluster connection string.

Update `MONGO_URI` in `back/.env` with your Atlas connection string. Replace the placeholders with your actual database username, password, and database name as required.

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/adminUserDB
PORT=5000
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=replace-with-a-strong-password
```

The Atlas connection string above is an example. Use the actual connection string provided by MongoDB Atlas.

**Security:** Do not commit your `.env` file or share database credentials. The `.env.example` file contains example values only.

### 3. Install Backend Dependencies

From the `back/` directory, run:

```bash
npm install
```

### 4. Install Frontend Dependencies

Navigate to the frontend folder:

```bash
cd ../front
npm install
```

## Running the Application

Run the backend and frontend in separate terminal windows.

### Terminal 1: Backend

```bash
cd back
npm start
```

For development with automatic restarts:

```bash
npm run dev
```

The backend API runs at:

`http://localhost:5000`

### Terminal 2: Frontend

From the project root:

```bash
cd front
npm start
```

The React development server runs at:

`http://localhost:3000`

Open the frontend URL in your browser to use the application.

## Application Routes

| Route | Page | Description |
|---|---|---|
| `/` | Registration | Register a new user |
| `/login` | Login | Student login |
| `/admin-login` | Admin Login | Administrator login |
| `/admin` | Admin Dashboard | View registered users |
| `/home` | Home | Post-login landing page |

## Available Scripts

### Backend (`back/`)

| Command | Description |
|---|---|
| `npm start` | Start the backend server |
| `npm run dev` | Start the server with nodemon |

### Frontend (`front/`)

| Command | Description |
|---|---|
| `npm start` | Start the React development server |
| `npm run build` | Create a production build |
| `npm test` | Run the frontend test suite |

## Security Notes

- User passwords are hashed using bcryptjs before storage.
- Admin credentials are configured through backend environment variables.
- Database connection settings are loaded from the backend `.env` file.
- `.env` files and `node_modules` directories are excluded through `.gitignore`.
- Use strong passwords and never publish database credentials or other secrets.
- For production use, implement and verify appropriate authentication, authorization, and session/token handling before deployment.

## Important Notes

- Users registered before password hashing was introduced may need to register again, depending on how their existing passwords are stored.
- Local MongoDB must be running when using the local connection string.
- MongoDB Atlas requires a valid connection string, database user, and appropriate network access configuration.
- The frontend currently uses local development API URLs. Update the API configuration when preparing the application for deployment.

## Future Improvements

- Implement seat availability and reservation management
- Add booking confirmation and reservation history
- Add stronger session/token-based authentication and authorization
- Deploy the frontend, backend, and database for online access

## Author

**Saranya M.**

GitHub: [Saranya730](https://github.com/Saranya730)

Project Repository: [College Seat Reservation System](https://github.com/Saranya730/college-seat-reservation-system)
