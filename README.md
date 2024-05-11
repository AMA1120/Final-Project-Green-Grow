# Green-Grow
This is  a Agri Connect &amp; Fertilizer Distribution Tracking Platform.  Green-Grow is a comprehensive web application tailored for the agricultural community. It serves as a pivotal platform for farmers to monitor and manage the distribution of fertilizers, ensuring that the backbone of our food supply is supported by the latest in tech-driven efficiency.

# Functionalities:

- **Fertilizer Tracking**:   Monitor the distribution of fertilizers to ensure timely delivery and efficient usage.

- **User-Friendly Interface**: Intuitive design for easy navigation and interaction.

- **Admin Dashboard**: Admins can manage users, track distribution, and analyze data.

- **Real-time Alerts**: Stay informed about fertilizer availability and delivery status.

<h2>🛠️ Installation Steps:</h2>

<h3>Green-Grow Web Application Backend</h3>

<p>1. Clone the Repository</p>

```
https://github.com/AMA1120/Final-Project-Green-Grow.git
```

<p>2. Navigate to the backend directory</p>

```
`cd Final-Project-Green-Grow/backend`
```

<p>3. Install the Dependencies</p>

```
`npm install`
```

<p>4. Start the backend</p>

```
`npm run dev`
```

<hr>

<h3>Green-Grow Web Application User Frontend</h3>

<p>1. Clone the Repository</p>

```
https://github.com/AMA1120/Final-Project-Green-Grow.git
```

<p>2. Navigate to the frontend directory</p>

```
`cd Final-Project-Green-Grow/frontend`
```

<p>3. Install the dependencies</p>

```
`npm install`
```

<p>4. Start the frontend</p>

```
`npm run dev`
```

<hr>

<h3>Green-Grow Web Application Admin Frontend</h3>

<p>1. Clone the Repository</p>

```
https://github.com/AMA1120/Final-Project-Green-Grow.git
```

<p>2. Navigate to the admin directory</p>

```
`cd Final-Project-Green-Grow/admin`
```

<p>3. Install the dependencies</p>

```
`npm install`
```

<p>4. Start the admin</p>

```
`npm run dev`
```


# Technologies Used:

**Frontend**: React.js

**Backend**: Node.js, Express.js

**Database**: MongoDB

**Testing**: Jest

**Containerization**: Docker

**Message Sending**: Twilio


# File structure:


```
.
└── Final-Project-Green-Grow-main
    |
    ├──.github\work
    |     ├──docker-compose-image.yml   // Docker Compose file for building Docker images
    |     └──testing.yml                // Testing workflow configuration file
    |
    ├── frontend                       // Frontend directory for the client-side application
    |   ├── public                     // Public assets and static files
    |   |  
    |   ├── src 
    |   |    ├──components             // Frontend components (e.g., Navbar, Footer)
    |   |    ├──Images                 // Images used in the frontend
    |   |    └──pages                  // Frontend pages
    |   |
    |   ├── Dockerfile                 // Docker configuration file for building the client image
    |   ├── jest.config.js             // Jest configuration file for frontend testing
    |   ├── package-lock.json
    |   ├── package.json
    |   └──.gitignore                  // Gitignore file to specify files and directories to be ignored by Git
    |
    ├── admin                          // Admin dashboard directory
    |   ├── public
    |   ├── src
    |   |    ├──components             // Components for the admin dashboard
    |   |    └──pages                  // Admin dashboard pages
    |   |    
    |   ├── Dockerfile                 // Docker configuration file for building the dashboard image
    |   ├── .gitignore                 // Gitignore file for the dashboard
    |   ├── package-lock.json
    |   └── package.json
    |    
    |   
    ├── backend                        // Backend server directory
    |   ├── models                     // Database models
    |   ├── routes                     // API routes
    |   ├── test                       // Test files for server testing
    |   ├── .dockerignore              // Dockerignore file for excluding files from Docker build
    |   ├── .gitignore                 // Gitignore file for the server
    |   ├── app.js                     // Main application file
    |   ├── Dockerfile                 // Docker configuration file for building the server image
    |   ├── server.js                  // Server entry point
    |   ├── package-lock.json
    |   └── package.json
    |   
    |
    |
    ├── docker-compose.yml             // Docker Compose file for defining services, networks, and volumes
    └── README.md                       // Readme file providing information about 
```
