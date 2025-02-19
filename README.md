# Live Match API

## Description
This project is a Node.js API that fetches live football match data from the Sofascore API. The data is normalized before being returned to the client.

## Features
- Fetches live football match information.
- Normalizes the data into a standardized format.
- Returns the normalized data to the client via an HTTP route.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Framework for building REST APIs.
- **Fetch API**: Used to make HTTP requests to the Sofascore API.

## Installation & Execution
### 1. Clone the repository
```sh
git clone https://github.com/DevEduardoSouza/api-rest-node-football.git
cd api-rest-node-football
```

### 2. Install dependencies
```sh
npm install
```

### 3. Start the server
```sh
npm run dev
```

The server will be running at `http://localhost:8000` (or the configured port).

## API Usage
### **Endpoint: Get live matches**
**URL:** `/live-match`
**Method:** `GET`
**Response:**
```json
[
  {
    "id": 123,
    "tournament": "Premier League",
    "slug": "premier-league",
    "category": "England",
    "season": "2024",
    "roundInfo": "Round 5",
    "status": "1st Half",
    "homeTeam": {
      "name": "Manchester United",
      "score": 1
    },
    "awayTeam": {
      "name": "Chelsea",
      "score": 0
    },
    "statusTime": {
      "timestamp": 1712345678
    }
  }
]
```

## Project Structure
```
/live-match-api
│── /src
│   ├── controllers
│   │   ├── liveMatchController.js  # API Controller
│   ├── services
│   │   ├── liveMatchService.js     # Logic for fetching and normalizing data
│   ├── routes
│   │   ├── routes.js               # Route definitions
│── index.js                        # Main entry file
│── package.json                    # Project dependencies
```

## Contact
For questions or suggestions, contact me

