# Message Board

A simple message board built with Node.js, Express, and EJS. Users can view a list of posted messages, open a message to see its details, and submit new messages through a form.

## Features

- View all posted messages on the homepage
- Open an individual message to see its full details
- Post a new message via a form (with basic validation against empty submissions)
- Server-rendered views using EJS templates
- Static CSS styling served from the `public` folder

## Project Structure

```
.
├── controllers/
│   ├── formController.js       # Handles rendering the "new message" form
│   └── messageController.js    # Handles fetching, displaying, and creating messages
├── public/
│   └── styles.css              # Global stylesheet
├── routes/
│   └── indexRouter.js          # Defines all app routes
├── views/
│   ├── form.ejs                # New message form
│   ├── index.ejs               # List of all messages
│   ├── message.ejs             # Single message detail view
│   └── nav.ejs                 # Shared navigation bar (partial)
├── db.js                       # In-memory data store for messages
├── index.js                    # App entry point / server setup
├── package.json
└── package-lock.json
```

## Routes

| Method | Path             | Description                       |
|--------|------------------|------------------------------------|
| GET    | `/`              | View all messages                  |
| GET    | `/new`           | Show the new message form          |
| POST   | `/new`           | Submit a new message                |
| GET    | `/messages/:id`  | View details of a single message    |

## Data Storage

Messages are currently stored in-memory (`db.js`), meaning all data resets when the server restarts. This is intended as a learning project; swapping in a real database (e.g., SQLite, MongoDB, PostgreSQL) would be a natural next step.

## Possible Improvements

- Persist messages to a real database
- Add edit/delete functionality for messages
- Add user authentication
- Add timestamps formatting (e.g., "2 minutes ago")
- Add client-side and server-side validation feedback for all form fields.