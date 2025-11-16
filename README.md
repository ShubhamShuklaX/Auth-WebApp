# MERN Authentication Web App

A full-stack authentication application built with **MongoDB**, **Express**, **React**, **Node.js**, and **Vite**.

## Features

- ✅ User Registration with validation
- ✅ User Login with JWT authentication
- ✅ Protected routes and dashboard
- ✅ Password hashing with bcrypt
- ✅ Modern UI with React and Vite
- ✅ Context API for state management
- ✅ Responsive design

## Tech Stack

### Frontend

- React 18
- Vite
- React Router v6
- Axios
- Context API

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

## Project Structure

```
Auth-WebApp/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   └── authController.js     # Authentication logic
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT verification
│   ├── models/
│   │   └── User.js               # User schema
│   ├── routes/
│   │   └── auth.js               # Auth routes
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js                 # Entry point
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Navbar.css
    │   │   └── PrivateRoute.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx   # Auth state management
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── Dashboard.jsx
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── index.css
    ├── .env.example
    ├── .gitignore
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

```powershell
cd backend
```

2. Install dependencies:

```powershell
npm install
```

3. Create a `.env` file by copying `.env.example`:

```powershell
cp .env.example .env
```

4. Configure your environment variables in `.env`:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-auth
JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
```

**Note:** For MongoDB Atlas, use your connection string:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mern-auth
```

5. Start the backend server:

```powershell
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:

```powershell
cd frontend
```

2. Install dependencies:

```powershell
npm install
```

3. Create a `.env` file (optional):

```powershell
cp .env.example .env
```

4. Start the development server:

```powershell
npm run dev
```

The app will run on `http://localhost:3000`

## API Endpoints

### Authentication Routes

| Method | Endpoint             | Description         | Access  |
| ------ | -------------------- | ------------------- | ------- |
| POST   | `/api/auth/register` | Register a new user | Public  |
| POST   | `/api/auth/login`    | Login user          | Public  |
| GET    | `/api/auth/profile`  | Get user profile    | Private |

### Request Examples

**Register:**

```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Login:**

```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Get Profile:**

```
GET /api/auth/profile
Headers: {
  "Authorization": "Bearer <token>"
}
```

## Usage

1. **Register**: Create a new account by clicking "Register" and filling out the form
2. **Login**: Use your credentials to login
3. **Dashboard**: After login, you'll be redirected to your dashboard
4. **Logout**: Click the logout button to end your session

## Environment Variables

### Backend (.env)

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT token generation

### Frontend (.env)

- `VITE_API_URL` - Backend API URL (default: http://localhost:5000)

## Features Explained

### Authentication Flow

1. User registers with name, email, and password
2. Password is hashed using bcrypt before storing
3. On login, JWT token is generated and sent to client
4. Token is stored in localStorage
5. Protected routes verify token before allowing access

### State Management

- Uses React Context API for global auth state
- Persists user session in localStorage
- Automatic redirect for authenticated users

## Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token authentication
- Protected API routes with middleware
- Input validation
- CORS enabled

## Development

### Backend Development

```powershell
cd backend
npm run dev
```

### Frontend Development

```powershell
cd frontend
npm run dev
```

### Build for Production

**Frontend:**

```powershell
cd frontend
npm run build
```

The build files will be in the `dist/` directory.

## Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB is running locally or check your Atlas connection string
- Verify network access in MongoDB Atlas (whitelist your IP)

### CORS Errors

- Backend has CORS enabled by default
- Ensure frontend proxy is configured in `vite.config.js`

### JWT Token Issues

- Check if JWT_SECRET is set in backend `.env`
- Verify token is being sent in Authorization header

## Future Enhancements

- [ ] Email verification
- [ ] Password reset functionality
- [ ] Social media authentication (Google, Facebook)
- [ ] Profile picture upload
- [ ] Two-factor authentication
- [ ] Remember me functionality
- [ ] Admin panel

## License

MIT

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author

Your Name

---

**Happy Coding! 🚀**
