# LMS Frontend

A modern and responsive **Learning Management System (LMS)** frontend built with **React.js**. The application provides dedicated interfaces for **students** and **educators**, allowing users to browse courses, enroll in them, watch course videos, and manage courses through a clean and responsive user interface.

> **Note:** This is a frontend-only application. All application logic is implemented on the client side using React and Context API. The project uses **local/mock data** to simulate courses, enrollments, and educator information. No backend, database, or REST API is integrated.

---

## Live Demo

--> https://lms-frontend-project.netlify.app/

---

## Features

### Student Features

- Browse all available courses
- Search courses by title
- View detailed course information
- Enroll in courses (frontend logic)
- View enrolled courses
- Watch course lectures through an integrated YouTube player
- Track learning progress
- Responsive and user-friendly interface

### Educator Features

- Educator Dashboard
- Add new courses
- Rich text editor for course descriptions
- View and manage created courses
- View students enrolled in educator's courses

### General Features

- Client-side routing
- Authentication UI with Clerk
- Global state management using Context API
- Responsive design for desktop, tablet, and mobile devices

---

## Tech Stack

- React.js
- React Router DOM
- Tailwind CSS
- JavaScript (ES6+)
- Clerk Authentication
- Context API
- React Quill
- React YouTube
- RC Progress
- Humanize Duration

---

## Pages

### Student

- Home
- Courses List
- Course Details
- My Enrollments
- Player

### Educator

- Dashboard
- Add Course
- My Courses
- Students enrolled

### Common

- Not Found (404)

---

## Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── educator/
│   └── student/
│
├── context/
│
├── pages/
│   ├── educator/
│   ├── student/
│   └── NotFound.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/Harsimrankaur2004/lms-frontend
```

### Navigate to the project folder

```bash
cd lms-frontend
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

---

## Current Limitations

- Frontend-only application
- No backend integration
- No database connection
- No persistent data storage
- Course, enrollment, and dashboard data are managed using local/mock data and React Context API

---

## Getting Started

1. Clone the repository.
2. Install all dependencies using `npm install`.
3. Add your Clerk keys in the environment file if required.

---

## License

This project is licensed under the **MIT License**.

---
