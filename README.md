# Student Management System

A full-stack **Student Management System** built with **NestJS**, **React**, and **PostgreSQL**. This project demonstrates authentication, student management (CRUD), frontend-backend integration, and a modern responsive dashboard.

---

## 🚀 Features

### Authentication
- User Login
- Password Hashing using bcrypt
- Dashboard Navigation
- Logout

### Student Management
- Add Student
- Edit Student
- Delete Student
- Search Students
- Student Statistics Dashboard
- Popup Student Form
- Responsive Sidebar
- Responsive Dashboard UI

### Backend
- NestJS REST API
- DTO Validation
- PostgreSQL Database
- TypeORM Integration
- CORS Configuration

---

## 🛠️ Tech Stack

### Backend
- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- bcrypt
- class-validator
- class-transformer

### Frontend
- React
- Vite
- React Router DOM
- Axios
- Inline CSS

---

## 📂 Project Structure

```text
Student-Management-System
│
├── backend
│   ├── src
│   │   ├── auth
│   │   ├── students
│   │   ├── users
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── StudentForm.jsx
│   │   │   └── StudentTable.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

## 🔄 Application Flow

```text
Login Page
      │
      ▼
NestJS Authentication
      │
      ▼
Dashboard
      │
      ├──────────────┐
      ▼              ▼
Student Form     Student Table
      │              │
      ▼              ▼
 Add / Edit      Search / Delete
      │              │
      └──────┬───────┘
             ▼
     PostgreSQL Database
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/fsdshahil-byte/NestLogin.git
```

---

### Backend

```bash
cd backend
npm install
npm run start:dev
```

Backend runs on:

```text
http://localhost:3000
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 📌 API Endpoints

### Authentication

```http
POST /auth/login
```

---

### Students

```http
GET    /students
POST   /students
PATCH  /students/:id
DELETE /students/:id
```

---

## 🎯 Learning Outcomes

Through this project, I learned:

- NestJS Architecture
- Modules
- Controllers
- Services
- DTO Validation
- CRUD Operations
- TypeORM
- PostgreSQL Integration
- Password Hashing using bcrypt
- Authentication
- React Hooks
- React Router
- Axios API Integration
- Component-Based Architecture
- State Management using Hooks
- Full-Stack Application Development

---

## 📸 Screenshots

### Login Page

```
screenshots/login.png
```

### Dashboard

```
screenshots/dashboard.png
```

### Student Management

```
screenshots/students.png
```

---

## 🔮 Future Improvements

- JWT Authentication
- Protected Routes
- Role-Based Authorization
- Course Management
- Trainer Management
- Reports Dashboard
- Pagination
- Form Validation
- Toast Notifications
- Dark Mode
- Deployment

---

## 👨‍💻 Author

**Shahil M**

GitHub: https://github.com/fsdshahil-byte

---

## 📄 License

This project was developed as a learning project to understand full-stack web development using **NestJS**, **React**, and **PostgreSQL**, while implementing authentication and student management features.
