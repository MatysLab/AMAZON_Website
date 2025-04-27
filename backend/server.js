//Server URL: http://localhost:8383
//Port: 8383

require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import CORS
const PORT = process.env.PORT;

const app = express();

let users = [];

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
   console.log(req.ip);
   res.json({ message: "Welcome to the server!" });
});


// Type 1 - Website endpoints (Visual)

app.get('/dashboard', (req, res) => {
   res.json({ message: "Connected to backend dashboard!" });
});

//Type 2 - API endpoints (non visual)

app.get('/api/data/', (req, res) => {
   res.json({ message: "Connected to backend api: DATA!", user});
});

app.post('/api/data/', (req, res) => {
   const data = req.body;
   console.log('Received data:', data);

   users.push(data);
   console.log('All users:', users);

   res.sendStatus(201);
});


//Server listen start
app.listen(PORT, () => {
   console.log('Server running on http://localhost:' + PORT + '/');
});
