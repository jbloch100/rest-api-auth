# Scalable REST API with Authentication

A production-ready RESTful API built with **Node.js**, **Express**, **MongoDB**, and **JWT** authentication. This project includes secure user registration/login, protected routes, and full CRUD operations on user data. Designed for portfolio and real-world backend experience.

---

## Features

- **User Authentication** with JSON Web Tokens (JWT)
- **User Registration & Login**
- **Secure Password Hashing** using bcrypt
- **Protected Routes** using middleware
- **CRUD Operations** for user data
- **Input Validation & Error Handling**
- **Dockerized Setup** for easy deployment
- **Unit Tests** using Mocha & Chai

---

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT
- **Containerization:** Docker, Docker Compose
- **Testing:** Mocha, Chai

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/rest-api-auth.git
cd rest-api-auth
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://mongo:27017/auth_db
JWT_SECRET=your_jwt_secret_key
```

---

## Running the Project

### Using Docker (Recommended)

```bash
docker-compose up --build
```

Visit: [http://localhost:5000](http://localhost:5000)

---

## API Endpoints

### Auth Routes
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login and get token

### User Routes (Protected)
- `GET /api/users` – Get all users
- `GET /api/users/:id` – Get user by ID
- `PUT /api/users/:id` – Update user
- `DELETE /api/users/:id` – Delete user

**Note:** Add `Authorization: Bearer <token>` header for all protected routes.

---

## Running Tests

```bash
npm install
npm test
```

---

## Docker Compose Overview

- **API Service:** Runs Express server
- **Mongo Service:** Local MongoDB instance with volume

---

## License

This project is licensed under the MIT License.
