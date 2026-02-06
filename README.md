Portfolio Website - Full Stack Minor Project

Overview

The project developed is a full-stack personal portfolio website, aimed at displaying my academic qualifications, technical skills, projects, and contact details in a clean and presentable way.

The idea was to create a learning-oriented system, rather than a template-based portfolio, and thus focus on structure, backend, and data. The site comes with a pre-existing contact form and backend implementation, as well as an admin view to view the messages.

Tech Stack

Frontend

HTML5 (semantic, multi-page structure)

CSS3 (custom styling, Flexbox-based layout)

JavaScript (vanilla JS for interactivity and API communication)

Backend

Node.js

Express.js

REST APIs for form submission and message retrieval

Storage

Local JSON file (used for learning purposes instead of a database)

Tools

Git & GitHub

VS Code

Nodemon (development)


Features

Multi-page portfolio (Home, About, Skills, Projects, Contact)

Clean and minimal UI design

Responsive layout for different screen sizes

Functional contact form with validation

Backend API to handle contact form submissions

Persistent message storage

Admin messages page to view submitted contact data

Clear separation between frontend and backend

Project Structure

portfolio/
│
├── frontend/
│   ├── index.html
│   ├── about.html
│   ├── skills.html
│   ├── projects.html
│   ├── contact.html
│   ├── messages.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       ├── contact.js
│       └── messages.js
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── contact.js
│   ├── data/
│   │   └── messages.json
│   ├── package.json
│   └── .nodemon.json
│
└── README.md


How It Works (High Level)

The frontend is served as static HTML files.

The contact form sends data to the backend using a POST API.

The backend validates and stores messages in a local JSON file.

An admin page fetches stored messages using a GET API and displays them in a readable format.


How to Run Locally
1. Clone the repository
git clone <repository-url>
cd portfolio

2. Install backend dependencies
cd backend
npm install

3. Start the backend server
npm run dev


Server runs at:

http://localhost:5000

4. Run the frontend

Open the frontend folder

Use Live Server (VS Code extension) to open index.html

Learning Outcomes

Understanding multi-page frontend structure

Hands-on experience with Express.js routing

Handling form submissions and persistent storage

Implementing client–server communication using fetch API

Writing defensive backend code to avoid runtime crashes

Structuring a project cleanly for readability and maintenance

Future Improvements

Add authentication for admin access

Replace JSON storage with a database (MongoDB)

Improve UI/UX and accessibility

Deploy the project for public access


Author

Pushpender Prajapati
B.Tech CSE (Artificial Intelligence)
Parul University