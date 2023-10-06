# League of Legends Champion Database

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Frontend Overview](#frontend-overview)
  - [Home](#home)
  - [ShowLegends](#showlegends)
  - [Create](#create)
  - [LegendParam](#legendparam)
- [Backend API Endpoints](#backend-api-endpoints)
- [Backend Overview](#backend-overview)
- [Database Schema](#database-schema)
- [Acknowledgments](#acknowledgments)
- [Author](#author)
- [Contributing](#contributing)
- [Issues](#issues)

## Introduction

This project serves as a database for League of Legends champions, providing both frontend and backend components. It allows users to view, create, update, and delete League of Legends champions. The database is managed using MySQL.

## Features

- When Looking at this project it was very important to focus on CRUD functionality. The ability to view, modify and delete data from a database.

- **Create Champion**: Add new champions to the database.
- **Read Champions**: Browse and search for League of Legends champions.
- **Update Champion**: Edit existing champion details.
- **Delete Champion**: Remove champions from the database.

## Frontend Overview

The frontend of this project is developed using React and React Router to create a dynamic user interface. It consists of several main pages:

### Home

- Description: Displays a YouTube video introducing League of Legends and provides general information about the game.
- Code Snippet: [Home Component](./src/Pages/Home/Home.js)

### ShowLegends

- Description: Lists League of Legends champions, offers search functionality, and displays detailed champion information.
- Code Snippet: [ShowLegends Component](./src/Pages/ShowLegends/ShowLegends.js)

### Create

- Description: Allows users to add new League of Legends champions to the database.
- Code Snippet: [Create Component](./src/Pages/Create/Create.js)

### LegendParam

- Description: Shows detailed information about a selected champion, provides an option to edit champion details, and allows deletion.
- Code Snippet: [LegendParam Component](./src/Pages/LegendParam/LegendParam.js)

The frontend is organized within a Router, and navigation is facilitated using the Nav component.

## Backend API Endpoints

### GET /legends: Retrieve a list of champions.

````typescript

@GetMapping("/legends")
public ResponseEntity<List<Legend>> getLegends(
  @RequestParam(required = false) String lane,
  @RequestParam(defaultValue = "10") int limit
) {
  // ... GET /legends code ...
}



### POST /legend: Create a new champion.

```typescript
@PostMapping("/legend")
public ResponseEntity<Legend> createLegend(@RequestBody Legend legend) {
  // ... POST /legend code ...
}

````

### PUT /legend/{id}: Update an existing champion.

```typescript
@PutMapping("/legend/{id}")
public ResponseEntity<Legend> updateLegend(
  @RequestBody Legend newLegend,
  @PathVariable long id
) {
  // ... PUT /legend/{id} code ...
}

```

### DELETE /legend/{id}: Delete a champion by ID.

```typescript
@DeleteMapping("/legend/{id}")
public ResponseEntity<Void> deleteLegendById(@PathVariable long id) {
  // ... DELETE /legend/{id} code ...
}
```

## Backend Overview

The backend of this project is built using Java and the Spring Boot framework. It serves as the server-side component responsible for managing the League of Legends champion database. Here's an overview of what the backend does and how it interacts with the frontend:

### RESTful API

The backend provides a RESTful API that allows the frontend to perform various CRUD (Create, Read, Update, Delete) operations on the champion data. These operations include:

- **Retrieve Champions**: The frontend can send GET requests to retrieve a list of champions. Optionally, the frontend can specify a lane filter and limit the number of results.

- **Create Champion**: New champions can be added to the database by sending a POST request with champion details to the `/legend` endpoint.

- **Retrieve Champion Details**: The backend supports GET requests to fetch the details of a specific champion by ID.

- **Update Champion**: Existing champion data can be updated by sending a PUT request to the `/legend/{id}` endpoint.

- **Delete Champion**: Champions can be deleted from the database by sending a DELETE request to the `/legend/{id}` endpoint.

### Interaction with Frontend

The frontend interacts with the backend through HTTP requests. When a user interacts with the frontend, such as creating a new champion or updating an existing one, the frontend sends HTTP requests to the backend API to perform the corresponding action. The backend processes these requests, interacts with the database, and sends back appropriate responses to the frontend.

### Database Management

The backend manages the MySQL database that stores champion data. It uses Spring Data JPA to interact with the database, including performing queries, inserts, updates, and deletes.

### Error Handling

The backend includes error handling mechanisms to deal with exceptions and provide meaningful error responses to the frontend. For example, if a requested champion does not exist, the backend returns a 404 Not Found error.

## Database Schema

The SQL schema defines the structure of the legends table with columns for id, name, lane, role, and release_date.

## Acknowledgments

League of Legends data is used for educational purposes and belongs to Riot Games.

## Author

Luke Welbourn, Junior Software Developer, former \_nologist

## Contributing

Contributions are welcome. Please fork the repository and create a pull request.

## Issues

If you encounter any issues or have suggestions for improvement, please create an issue on the repository.
