# User Authentication

This project implements a basic user authentication system with registration, login, and profile access functionalities. It includes secure user authentication and authorization mechanisms using JWT, with all endpoints thoroughly tested and documented in Postman.

## Features
- **User Registration**: Allows users to register with unique email and password, with password complexity validation.
- **User Login**: Validates user credentials and generates a secure token upon successful login.
- **Protected Route**: A profile route that can only be accessed with a valid token.
- **Error Handling**: Returns descriptive error messages and appropriate HTTP status codes for various scenarios.
- **Data Validation**: Validates required fields, email format, and password strength; also sanitizes inputs.
- **Postman Collection**: Includes tests and documentation for each endpoint.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system. [Download Node.js](https://nodejs.org/).
- **MongoDB**: MongoDB instance for database operations. [MongoDB Setup Guide](https://www.mongodb.com/try/download/community).

## Technology Stack
- **
  - Backend: Node.js, Express.js
  - Database: MongoDB, Mongoose
  - Authentication: JWT (jsonwebtoken), bcrypt.js
  - Environment Variables: dotenv
  - Email: nodemailer (optional)
  - Testing & Documentation: Postman
- **

## Setup Instructions

### Prerequisites
Make sure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Clone the Repository
To clone the repository, open your terminal and run the following command:

```
git clone https://github.com/Anshu331/User-Authentication-Mool-Finanace-assignment-.git
```


## Navigate to the Project Directory

```
cd FintechAuth

```
## Install Dependencies

```
npm install

```
## To Run this Project via NPM follow below:
```
npm run dev

```

## Postman Collection
 
- Import the postman_collection.json file into Postman:
- Open Postman, go to File > Import.
- Select postman_collection.json and import.
- Use the endpoints as per the collection (e.g., Registration, Authentication).

## Assumptions & Decisions

- JWT Expiration: Tokens expire in 15 min to enhance security.
- Error Handling: Standardized error messages for user validation and server   issues.

