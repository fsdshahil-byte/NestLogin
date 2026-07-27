# NestLogin

A simple full-stack authentication application built using **NestJS**, **React**, and **PostgreSQL**. This project demonstrates user registration, secure login with password hashing, and frontend-backend integration.

---

## Features

* User Registration
* User Login
* Password Hashing using bcrypt
* Request Validation with DTOs
* PostgreSQL Database Integration
* TypeORM ORM
* React Frontend
* Axios API Integration
* Dashboard after Successful Login
* CORS Configuration

---

## Tech Stack

### Backend

* NestJS
* TypeScript
* TypeORM
* PostgreSQL
* bcrypt
* class-validator
* class-transformer

### Frontend

* React
* Vite
* Axios
* React Router DOM

---

## Project Structure

```text
Backend (NestJS)
├── auth
├── users
├── app.module.ts
├── main.ts
└── ...

Frontend (React)
├── pages
│   ├── Login.jsx
│   └── Dashboard.jsx
├── api
│   └── api.js
└── App.jsx
```

---

## Authentication Flow

```text
React Login Page
        │
        ▼
Axios Request
        │
        ▼
NestJS Controller
        │
        ▼
Authentication Service
        │
        ▼
PostgreSQL Database
        │
        ▼
Validate Credentials
        │
        ▼
Login Success
        │
        ▼
Dashboard
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/<your-username>/NestLogin.git
```

### Backend Setup

```bash
cd nest-auth
npm install
npm run start:dev
```

Backend runs on:

```text
http://localhost:3000
```

### Frontend Setup

```bash
cd nest-login-frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Endpoints

### Register

```http
POST /users/register
```

### Login

```http
POST /auth/login
```

---

## Learning Outcomes

Through this project, I learned:

* NestJS project structure
* Modules, Controllers, and Services
* DTO validation
* Entity creation with TypeORM
* PostgreSQL integration
* Password hashing using bcrypt
* Authentication flow
* React and NestJS integration
* API communication using Axios
* Basic routing with React Router

---

## Future Improvements

* JWT Authentication
* Protected Routes
* Role-Based Authorization
* Refresh Tokens
* Environment Variables
* Swagger API Documentation
* Logout Functionality
* User Profile Page

---

## Author

**Shahil M**

This project was developed as part of learning **NestJS** and implementing a basic full-stack authentication system using **React**, **NestJS**, and **PostgreSQL**.
