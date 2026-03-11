<h1 align="center">🌍 WanderLust</h1>

<p align="center">
A Full Stack Travel Listing Web Application inspired by Airbnb.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?logo=node.js">
  <img src="https://img.shields.io/badge/Express.js-Framework-black?logo=express">
  <img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb">
  <img src="https://img.shields.io/badge/Mongoose-ODM-red?logo=mongoose">
  <img src="https://img.shields.io/badge/EJS-Template-orange">
  <img src="https://img.shields.io/badge/Bootstrap-UI-purple?logo=bootstrap">
  <img src="https://img.shields.io/badge/Passport.js-Auth-blue">
  <img src="https://img.shields.io/badge/Cloudinary-Image%20Upload-blue?logo=cloudinary">
  <img src="https://img.shields.io/badge/Mapbox-Maps-black?logo=mapbox">
</p>

<p align="center">
  <a href="https://wanderlust-kst3.onrender.com"><strong>🔗 Live Demo</strong></a>
</p>

---

## 🌐 Live Website

🚀 **Try the app here:**  
https://wanderlust-kst3.onrender.com

---

# 🎥 Demo Preview

<p align="center">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2R4dGd1cDJ2d2p0aWJodnBqajVjdXh3MThscmNpdG1tb2hha2V3cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7aD2saalBwwftBIY/giphy.gif" width="800">
</p>

---

# 📌 About The Project

**WanderLust** is a **Full Stack Travel Listing Web Application** where users can explore travel destinations, create their own listings, upload images, and share reviews.

This project is inspired by **Airbnb-style platforms**, allowing travelers to discover amazing places around the world.

Users can:

- Explore listings
- Create travel destinations
- Upload images
- Add reviews
- View location on map
- Manage their listings

---

# ✨ Features

### 👤 Authentication
- User Signup
- User Login
- Secure Authentication using **Passport.js**

### 🏠 Listings
- Create new travel listings
- Upload images with **Cloudinary**
- Edit existing listings
- Delete listings
- Authorization (Only owner can edit/delete)

### ⭐ Reviews
- Add reviews to listings
- Delete reviews
- Rating system

### 📍 Maps Integration
- Location displayed using **Mapbox**

### 💬 Flash Messages
- Success/Error messages for user actions

### 🔐 Security
- Authentication & Authorization
- Data validation
- Protected routes

---

# 🛠️ Tech Stack

## Frontend
- HTML
- CSS
- Bootstrap
- EJS

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication
- Passport.js
- Express-session

## Image Storage
- Cloudinary

## Maps
- Mapbox

---

# 📂 Project Folder Structure
WanderLust
│
├── models
│ ├── listing.js
│ ├── review.js
│ └── user.js
│
├── routes
│ ├── listings.js
│ ├── reviews.js
│ └── users.js
│
├── views
│ ├── layouts
│ ├── listings
│ ├── users
│ └── includes
│
├── public
│ ├── css
│ ├── js
│ └── images
│
├── utils
│
├── app.js
├── cloudConfig.js
├── middleware.js
└── package.json
