const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
const indexRoute = require('./routes/index');
app.use('/', indexRoute);

// Start server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on ${port}...`));
