const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the assets folder
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));

// Serve the index.html as the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Serve the login and register pages
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "auth", "login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "auth", "register.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Frontend server running at: http://localhost:${PORT}`);
    console.log(`🔗 Login page: http://localhost:${PORT}/login`);
    console.log(`🔗 Register page: http://localhost:${PORT}/register`);
});
