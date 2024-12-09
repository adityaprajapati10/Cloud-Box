# Cloud-Box

Cloud-Box is a cloud storage system inspired by Google Drive, built using Node.js, Express.js, MongoDB, and Firebase. It enables users to securely upload, manage, and retrieve files. The project uses **EJS** for dynamic front-end rendering.

## Features

- **User Authentication**: Secure login and signup using Firebase Authentication.
- **File Management**: Upload, download, and delete files effortlessly.
- **Folder Organization**: Create and manage folders for better organization.
- **Search Functionality**: Quickly find files using a search feature.
- **Responsive Design**: Accessible on both desktop and mobile devices.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, HTML, CSS, JavaScript
- **Database**: MongoDB
- **Cloud Services**: Firebase (Authentication and Storage)

## Installation and Setup

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running
- Firebase account with a configured project

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/adityaprajapati10/Cloud-Box.git
   cd Cloud-Box
2. **Install Dependencies**:
   ```bash
    npm install

3. **Setup Environment Variables: Create a .env file in the root directory and configure the following**:
   ```env
    MONGO_URI=your-mongodb-connection-string
    FIREBASE_API_KEY=your-firebase-api-key
    FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    FIREBASE_PROJECT_ID=your-firebase-project-id
    FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
    FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
    FIREBASE_APP_ID=your-firebase-app-id
   
4. **Run the Application**:
   **Start the server**:
   ```bash
    npm start
  **Access the app at**:
  http://localhost:3000.
