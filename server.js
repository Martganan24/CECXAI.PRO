const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set the base directory properly
const baseDir = path.join(__dirname);

// Serve all static files correctly
app.use(express.static(baseDir));

// Serve login and register pages directly
app.get("/", (req, res) => {
    res.sendFile(path.join(baseDir, "index.html")); // Main frontend page
});

app.get("/login.html", (req, res) => {
    res.sendFile(path.join(baseDir, "login.html")); // Login page
});

app.get("/register.html", (req, res) => {
    res.sendFile(path.join(baseDir, "register.html")); // Register page
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Frontend server running at: http://localhost:${PORT}`);
    console.log(`🔗 Login page: http://localhost:${PORT}/login.html`);
    console.log(`🔗 Register page: http://localhost:${PORT}/register.html`);
});
