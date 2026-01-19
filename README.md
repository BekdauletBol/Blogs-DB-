# Assignment 3: Blogging Platform CRUD API

## Objective
A fully functional RESTful CRUD API for a simple blogging platform built with **Node.js**, **TypeScript**, and **MongoDB**.

## Features & Requirements Met:
- **Full CRUD Functionality**: Implementation of all required REST endpoints:
    - `POST /blogs`: Create a new blog post.
    - `GET /blogs`: Retrieve all blog posts.
    - `GET /blogs/:id`: Retrieve a single blog post by its ID.
    - `PUT /blogs/:id`: Update a blog post by its ID.
    - `DELETE /blogs/:id`: Delete a blog post by its ID.
- **Database Schema (Mongoose)**:
    - `Title` (String, Required)
    - `Body` (String, Required)
    - `Author` (String, default: "Anonymous")
    - `Timestamps` (createdAt, updatedAt)
- **Data Validation**: Strict validation ensuring all submissions include a title and body.
- **Error Handling**: Implemented handling for database issues (404 Not Found, Invalid IDs) and invalid client requests (400 Bad Request).
- **Simple Interface**: A basic front-end interface (HTML/JS) to interact with the API directly from the browser.
- **Testing**: Verified using Postman.

## Tech Stack
- **Backend**: Node.js, Express.js, TypeScript.
- **Database**: MongoDB Atlas via Mongoose.
- **Tools**: Nodemon, TSX, Dotenv.

## Setup Instructions
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
