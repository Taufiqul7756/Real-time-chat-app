# Real-Time Chat App

This is a real-time chat application built using React, Express, Socket.io, and MongoDB. Users can register, login, make chat, real time notifications and send messages in real-time.

## Features

- User authentication (register, login, logout)
- Real-time messaging using Socket.io
- Real time notifications.
- Responsive UI design with Tailwind CSS and Bootstrap

## Technologies Used

- **Frontend:**
  - React
  - React Router DOM
  - React Bootstrap
  - Tailwind CSS
  - Socket.io Client
- **Backend:**
  - Express.js
  - MongoDB (with Mongoose)
  - Socket.io
- **Authentication:**
  - JSON Web Tokens (jsonwebtoken)
  - bcrypt for password hashing
  - validator for input validation

## Dependencies

```json
"dependencies": {
  "bootstrap": "^5.2.3",
  "moment": "^2.29.4",
  "react": "^18.2.0",
  "react-bootstrap": "^2.6.0",
  "react-dom": "^18.2.0",
  "react-hook-form": "^7.50.1",
  "react-hot-toast": "^2.4.1",
  "react-input-emoji": "^4.3.0",
  "react-router-dom": "^6.6.2",
  "react-toastify": "^10.0.4",
  "socket.io-client": "^4.7.4",
  "express": "^4.17.1",
  "mongoose": "^6.1.14",
  "socket.io": "^4.3.2",
  "validator": "^13.6.0",
  "bcrypt": "^5.0.1"
}
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Taufiqul7756/Real-time-chat-app.git
   ```

## Configure environment variables:

**Replace your mongodb uri and jwt secret:**

```bash
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## Install frontend dependencies:

cd real-time-chat-app/client

```bash
npm install
npm run dev
```

## Install backend dependencies:

cd ../server

```bash
npm install
nodemon
```

## Install Socket:

cd ../socket

```bash
npm install
nodemon
```

## API Documentation

View the API documentation on [Postman](https://documenter.getpostman.com/view/12853812/2sA2xcaah9).
