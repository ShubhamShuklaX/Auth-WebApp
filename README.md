# MERN Authentication Web App

A full-stack authentication application built with MongoDB, Express, React, Node.js, and Vite.

## Features

- User Registration & Login with JWT authentication
- Protected routes and dashboard
- Password hashing with bcrypt
- Modern responsive UI
- Context API for state management

## Tech Stack

**Frontend:** React 18, Vite, React Router v6, Axios  
**Backend:** Node.js, Express, MongoDB, JWT, bcryptjs

## Quick Start

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)

### Backend Setup

```powershell
cd backend
npm install
cp .env.example .env
```

Configure `.env`:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-auth
JWT_SECRET=your_secret_key_here
```

Start server:

```powershell
npm run dev
```

### Frontend Setup

```powershell
cd frontend
npm install
npm run dev
```

## The app runs on `http://localhost:3000` and API on `http://localhost:5000`
