# AuthApp

## Overview
AuthApp is a comprehensive web application focused on implementing robust authentication mechanisms. It provides secure user management, including registration, login, password reset, and token-based authentication using JWT (JSON Web Tokens).

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features
- User Registration
- User Login
- Password Reset
- JWT Authentication
- Secure Password Storage
- User Profile Management

## Technologies
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Frontend:** React.js (if applicable)

## Getting Started

### Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine
- MongoDB installed and running

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Lakshya2099/AuthApp.git
    ```
2. Navigate to the project directory:
    ```bash
    cd AuthApp
    ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```

### Running the Application
1. Set up environment variables:
    - Create a `.env` file in the root directory
    - Add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

2. Start the application:
    ```bash
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`

## Usage
- Register a new user by providing an email and password
- Login with registered credentials to receive a JWT token
- Use the token to access protected routes
- Reset password functionality via email

## API Endpoints

### Authentication
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login an existing user
- **POST** `/api/auth/reset-password` - Initiate password reset
- **PUT** `/api/auth/reset-password/:token` - Complete password reset

### User
- **GET** `/api/user/profile` - Get user profile (requires authentication)
- **PUT** `/api/user/profile` - Update user profile (requires authentication)

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

