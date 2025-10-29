import express from "express";

// Instantiate node app
const app = express();

// Set view engine
app.set("view engine", "ejs");

// Define a port number
const PORT = 3006;

// Enable static serving
app.use(express.static("public"));

// Middleware for parsing data/json
app.use(express.urlencoded({ extended: true }));

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

// Define default route "/"
app.get("/", (req, res) => {
	res.render("booking");
});

// Define confirmation route
app.get("/confirmation", (req, res) => {
	res.render("confirmation");
});
