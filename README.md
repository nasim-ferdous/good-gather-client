# 🌿 Good Gather - Event Management Platform

### 🌐 Live Site URL

👉 [https://regal-madeleine-5af8d9.netlify.app/](https://regal-madeleine-5af8d9.netlify.app/)

## 📖 Overview

**Good Gather** is a community-driven event management platform where users can create, manage, and participate in social, environmental, and charity-based events.  
It promotes positive social action by connecting people who care about making a difference — whether it’s a cleanup drive, a tree plantation, or a charity donation.

---

## ✨ Core Features

- 🗓️ **Create, Update & Manage Events:**  
  Users can add new events, edit details, and manage their personal events with ease.

- 🔍 **Advanced Search & Filtering:**  
  Quickly find events by category or name using flexible query-based search.

- 🔐 **User Authentication (Firebase):**  
  Secure sign-up, login, and logout functionality to protect user accounts.

- 📅 **Upcoming Events Section:**  
  Displays only events with future dates — ensuring users see what’s relevant.

- 🧩 **Dynamic Event Details Page:**  
  Each event includes complete information such as title, date, location, and creator details.

- 🎨 **Modern Responsive UI:**  
  Built with **React** and **Tailwind CSS**, ensuring a smooth, mobile-friendly design.

- ⚙️ **Fully Functional Backend:**  
  Powered by **Express.js** and **MongoDB**, handling secure CRUD operations and API endpoints.

---

## 🛠️ Tech Stack

### 🧭 Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Firebase Authentication
- React Toastify
- React Icons
- SweetAlert2

### ⚙️ Backend

- Node.js
- Express.js
- MongoDB
- dotenv for environment management
- CORS & JWT for authentication and security

---

🌍 API Endpoints Overview

Method Endpoint Description
GET /events Get all events
GET /events/:id Get single event by ID
POST /events Create new event
PUT /events/:id Update event
DELETE /events/:id Delete event
GET /search?search= Search events by title
GET /filter?eventType= Filter events by type
GET /my-events?email= Get events created by specific user
---

📦 Installation & Setup Guide
🛠️ Prerequisites

Before running the project, make sure you have installed:

Node.js (v16+ recommended)

npm or yarn

MongoDB (local or Atlas)

Git
---
⚙️ Frontend Installation (Client Side)
# Clone the repository
git clone https://github.com/YOUR_USERNAME/good-gather.git

# Go inside the project folder
cd good-gather

# Install dependencies
npm install

# Create .env file and add Firebase keys
VITE_apiKey=YOUR_API_KEY
VITE_authDomain=YOUR_AUTH_DOMAIN
VITE_projectId=YOUR_PROJECT_ID
VITE_storageBucket=YOUR_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_SENDER_ID
VITE_appId=YOUR_APP_ID

# Run the project
npm run dev

---
🗄️ Backend Installation (Server Side)
# Clone the backend repo (if separate)
git clone https://github.com/YOUR_USERNAME/good-gather-server.git

# Move into folder
cd good-gather-server

# Install backend dependencies
npm install

✨ Create a .env file
PORT=3000
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
JWT_SECRET=your_jwt_secret

---
🔧 Backend Dependencies Used
{
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^5.7.0",
    "nodemon": "^3.0.1"
  }
}
---
🎨 Frontend Dependencies Used
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.0",
    "firebase": "^10.0.0",
    "react-icons": "^4.9.0",
    "react-toastify": "^9.1.2",
    "sweetalert2": "^11.7.3",
    "axios": "^1.4.0",
    "tailwindcss": "^3.3.2",
    "daisyui": "^3.0.0"
  }
}

👨‍💻 Developer

Developed by: Nasim Ferdous (NFS)
💚 "Connecting people for a better tomorrow — one event at a time."
📧 Email: nasimferdouspust@gmail.com

📍 Bangladesh
