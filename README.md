# Social Media API

This is meant to be the backend functionality of a small social media application, and handle some potential user interactions.

---

## License

None

---

## Getting Started

### Built With

- Javascript in the forms of Node and Express

### Prerequisites

Installing the Development Depenencies and Depenencies use the following command:

- `npm install` OR `npm i`

### Development Dependency List

- `nodemon` - Version `^3.0.1`

---

### Application Dependency List

- `fs` - Version `^0.0.1-security`
- `inquirer` - Version `^8.2.4`
- `path` - Version `^0.12.7`

---

### Supported Scripts

- `test` - Runs `echo "Error: no test specified" && exit 1`
- `start` - Runs `node server.js`
- `readme` - Runs `node server.js`
- `dev` - Runs `npx nodemon server.js`

---

## How To Use The App

- This is a backend, so to use the full functionality of it you will need another application for API development, such as Insomnia or Postman, to initate a call to view the results.

---

### Application Feature List

## Features

- Each of the routes below describes a specific action that a user may take.
- Here is a description of what they do
  - `Test Routes` - Are my way of testing that the server is up and the route resources are accessible.
  - `User Routes` - Represent actions that are user related such as Getting all users, getting one user, updating, and deleting. Also, there are two end-points that add and delete a user from a "friend-list"
  - `Thought Routes` - Represent actions for what a user would take for adding a post, called thoughts in this program. The same type of resource and end-point setup exists here as with User resources. One can get all thoughts, one thought, add a new thought, update, and delete thoughts. Users can also react, add a comment, to an existing thought.

---

### List of API Routes Used

#### Test Routes

- `request_name` : `SERVER PING`
- `request_url` : `http://localhost:3001/api/ping`
- `http_method` : `GET`
- `request_name` : `USERS PING`
- `request_url` : `http://localhost:3001/api/users/ping`
- `http_method` : `GET`

- `request_name` : `THOUGHTS PING`
- `request_url` : `http://localhost:3001/api/thoughts/ping`
- `http_method` : `GET`

#### User Routes

- `request_name` : `ALL USERS`
- `request_url` : `http://localhost:3001/api/users/`
- `http_method` : `GET`

- `request_name` : `ONE USER`
- `request_url` : `http://localhost:3001/api/users/656373df81e0e3370450ce1d`
- `http_method` : `GET`

- `request_name` : `NEW USER`
- `request_url` : `http://localhost:3001/api/users/add`
- `http_method` : `POST`
- `mime_type` : `application/json`
- `body_text` : `{"username":"asdfdsf","email":"adsfdasfas@hey.com"}`

- `request_name` : `UPDATE USER`
- `request_url` : `http://localhost:3001/api/users/6563925fa78278bf7e5a1453`
- `http_method` : `PUT`
- `mime_type` : `application/json`
- `body_text` : `{"username":"hulse-2","email":"@hey.com"}`

- `request_name` : `DELETE USER`
- `request_url` : `http://localhost:3001/api/users/6563925fa78278bf7e5a1453`
- `http_method` : `DELETE`

- `request_name` : `NEW FRIEND`
- `request_url` : `http://localhost:3001/api/users/6563ce160fab6a375cfdc310/friends/6563c673c918468e272f1065`
- `http_method` : `POST`

- `request_name` : `DELETE FRIEND`
- `request_url` : `http://localhost:3001/api/users/656373df81e0e3370450ce1d/friends/656394556c4a86c5c402073a`
- `http_method` : `DELETE`

#### Thought Routes

- `request_name` : `ALL THOUGHTS`
- `request_url` : `http://localhost:3001/api/thoughts`
- `http_method` : `GET`

- `request_name` : `ONE THOUGHT`
- `request_url` : `http://localhost:3001/api/thoughts/6563cc739de286c5580773b8`
- `http_method` : `GET`

- `request_name` : `NEW THOUGHT`
- `request_url` : `http://localhost:3001/api/thoughts/add`
- `http_method` : `POST`
- `mime_type` : `application/json`
- `body_text` : `{"thoughtText":"Hereisathought.","userId":"6563c673c918468e272f1065"}`

- `request_name` : `UPDATE THOUGHT`
- `request_url` : `http://localhost:3001/api/thoughts/6563c8d62423c64bc55c0197`
- `http_method` : `PUT`
- `mime_type` : `application/json`
- `body_text` : `{"thoughtText":"Hereisadifferentcoolthing"}`

- `request_name` : `DELETE THOUGHT`
- `request_url` : `http://localhost:3001/api/thoughts/6563c7ca409c561cf13a120b`
- `http_method` : `DELETE`

- `request_name` : `NEW REACTION`
- `request_url` : `http://localhost:3001/api/thoughts/6563c2b967ae12ea25853ff2/reactions`
- `http_method` : `POST`
- `mime_type` : `application/json`
- `body_text` : `{"reactionBody":"kickrocks","username":"troll"}`

- `request_name` : `DELETE REACTION`
- `request_url` : `http://localhost:3001/api/thoughts/6563c2b967ae12ea25853ff2/reactions/6563c30e67ae12ea25854005`
- `http_method` : `DELETE`

---

## Deployement

The App Is Deployed In The Following Location

-

---

## Tuition Payments

- `npm rm` and `npm -D` for removing dependencies
- `utils` vs `helpers`

  - `utils`

    - The term "utils", short for "utilities", often contains functions or modules that provide general-purpose utility functions, not tied to a specific domain or context
    - These functions are typically reusable across various parts of your application
    - "Utils" is a broad and generic term, and the functions inside this folder might be used in different contexts

  - `helpers`
    - The term "helpers" is often associated with functions that assist or provide support within a specific domain or context
    - The functions inside a "helpers" folder are typically more specialized and closely tied to the functionality of a particular module, feature, or domain within your application

- To start mongodb on my computer I was reminded of this `brew services start mongodb-community~`

- Where your model properties go...

---

## How To Contribute

If you would like to contribute to the application here is how you can do that.
Please, follow these guidelines below:

- There are no contribution requests other than Forking the repo

---

## Acknowlegements

- I did use the starter code again as a resource when getting the initial layout of what this applicaiton should do to help me understand the scope of what was needed.
- All the code is my own.

---

## App Author

- Eric Hulse

If you have any questions about the repo, open an issue, or would like to contact me directly here is where I can be found.
(I do not use social media of any kind.)

- <a href="mailto:hulse@hey.com">Send Me An Email</a>
- You can find more of my work on my [Github](https://github.com/sempercuriosus/)
- Here is my <a href="https://sempercuriosus.github.io/PortfolioChallenge/">Personal Webpage</a>

---

## Final Note

- At this point. I am starting to be able to call myself a developer. This was a challenge, not all has been during the course of the bootcamp, but now we are starting to see the full scope of that which is involved in full stack application development. This is not easy but I would not have it any other way. I love learning, and I love being able to take that which I learn and apply it -- learning is half of the job. The other half is doing something with that knowledge. This is some cool stuff I am starting to use, and I know this is just the tip top of the iceberg.

---

===
