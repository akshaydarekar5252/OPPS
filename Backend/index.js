const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`GET request received, Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    let { user, password } = req.body; // Extracting from request body
    res.send(`POST request received, Welcome ${user}!`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
