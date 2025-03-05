const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Serve the index.html as the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Serve login page
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Serve register page
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "register.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Frontend server running at: http://localhost:${PORT}`);
    console.log(`🔗 Login page: http://localhost:${PORT}/login`);
    console.log(`🔗 Register page: http://localhost:${PORT}/register`);
});
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Serve the index.html as the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Serve login page
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Serve register page
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "register.html"));
});

// Catch-all route for 404 errors (important for Heroku)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running at: http://localhost:${PORT}`);
    console.log(`🔗 Login page: http://localhost:${PORT}/login`);
    console.log(`🔗 Register page: http://localhost:${PORT}/register`);
});
