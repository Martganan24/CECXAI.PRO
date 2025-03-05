const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set the base directory properly (pointing to CECXAI.PRO)
const baseDir = path.join(__dirname, "CECXAI.PRO");

// Serve all static files correctly
app.use(express.static(baseDir));

// Serve assets from the "assets" folder properly
app.use("/assets", express.static(path.join(baseDir, "assets")));

// Serve the main frontend page (index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(baseDir, "index.html"));
});

// Serve login and register pages from the "auth" folder
app.get("/login", (req, res) => {
    res.sendFile(path.join(baseDir, "auth", "login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(baseDir, "auth", "register.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Frontend server running at: http://localhost:${PORT}`);
    console.log(`🔗 Login page: http://localhost:${PORT}/login`);
    console.log(`🔗 Register page: http://localhost:${PORT}/register`);
});
