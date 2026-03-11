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
  <a under construction><strong>🔗 Live Demo</strong></a>
</p>

---

## 🌐 Live Website

🚀 **Try the app here:**  
Under Construction...

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

# 📡 API Routes

## Listings

| Method | Route | Description |
|------|------|-------------|
| GET | /listings | Show all listings |
| GET | /listings/new | Form to create listing |
| POST | /listings | Create listing |
| GET | /listings/:id | Show specific listing |
| GET | /listings/:id/edit | Edit listing form |
| PUT | /listings/:id | Update listing |
| DELETE | /listings/:id | Delete listing |

---

## Reviews

| Method | Route | Description |
|------|------|-------------|
| POST | /listings/:id/reviews | Add review |
| DELETE | /listings/:id/reviews/:reviewId | Delete review |

---

## Users

| Method | Route | Description |
|------|------|-------------|
| GET | /signup | Signup form |
| POST | /signup | Register user |
| GET | /login | Login form |
| POST | /login | Authenticate user |
| GET | /logout | Logout user |

---

## 🧑‍💻Author

Vikash Kumar

---

## 👀 Visitor Counter
<p align="center"> <img src="https://komarev.com/ghpvc/?username=VikashKumar167&label=Project%20Views&color=blue&style=flat" /> </p>

---
# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

```bash
git clone https://github.com/VikashKumar167/WanderLust.git
