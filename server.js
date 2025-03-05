const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set the base directory properly (remove extra 'CECXAI.PRO' folder)
const baseDir = path.join(__dirname);

// Serve all static files correctly
app.use(express.static(baseDir));

// Serve `auth/` and `assets/` properly
app.use("/auth", express.static(path.join(baseDir, "auth")));
app.use("/assets", express.static(path.join(baseDir, "assets")));

// Fix direct file serving issue
app.get("/", (req, res) => {
    res.sendFile(path.join(baseDir, "index.html")); // Serve main frontend file
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(baseDir, "auth", "login.html")); // Serve login page
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Frontend server running at: http://localhost:${PORT}`);
    console.log(`🔗 Login page: http://localhost:${PORT}/login`);
});
