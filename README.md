# NestLogin

A full-stack authentication application built with **NestJS**, **React**, and **PostgreSQL**. This project demonstrates the fundamentals of NestJS by implementing user registration, secure login with encrypted passwords, and frontend-backend integration.

---

## 🚀 Features

* User Registration
* User Login Authentication
* Password Hashing using bcrypt
* DTO Validation using class-validator
* PostgreSQL Database Integration
* TypeORM ORM
* React Frontend
* Axios API Integration
* Dashboard Navigation after Login
* CORS Configuration

---

## 🛠️ Tech Stack

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

## 📂 Project Structure

```text
NestLogin
│
├── backend
│   ├── src
│   │   ├── auth
│   │   ├── users
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## 🔄 Authentication Flow

```text
React Login Page
        │
        ▼
Axios API Request
        │
        ▼
NestJS Controller
        │
        ▼
Authentication Service
        │
        ▼
Users Service
        │
        ▼
PostgreSQL Database
        │
        ▼
Password Verification (bcrypt)
        │
        ▼
Login Successful
        │
        ▼
Dashboard
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/fsdshahil-byte/NestLogin.git
```

---

### Backend Setup

```bash
cd backend
npm install
npm run start:dev
```

Backend runs at:

```text
http://localhost:3000
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 📌 API Endpoints

### Register User

```http
POST /users/register
```

### Login User

```http
POST /auth/login
```

---

## 🎯 Learning Outcomes

Through this project, I learned:

* NestJS project structure
* Modules
* Controllers
* Services
* DTO Validation
* Entity Creation
* TypeORM
* PostgreSQL Integration
* Password Hashing using bcrypt
* Authentication Flow
* Exception Handling
* React Frontend Integration
* Axios API Communication
* React Router Navigation
* Full-Stack Application Development

---

## 📸 Screenshots

Add screenshots here after uploading them.

### Login Page

```
screenshots/login.png
```

### Dashboard

```
screenshots/dashboard.png
```

---

## 🔮 Future Improvements

* JWT Authentication
* Protected Routes
* Role-Based Authorization
* Refresh Tokens
* User Profile
* Logout
* Environment Variables
* Swagger API Documentation
* Responsive UI
* Deployment

---

## 👨‍💻 Author

**Shahil M**

GitHub: https://github.com/fsdshahil-byte

---

## 📄 License

This project was created for learning purposes to understand NestJS fundamentals and full-stack authentication using React and PostgreSQL.
