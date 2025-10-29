import express from "express";

// Instantiate node app
const app = new express();

// Define a port number
const PORT = 3006;

// Middleware for parsing data/json
app.use(express.urlencoded({ extended: true }));

// Define default route "/"
app.get("/", (req, res) => {
	res.render("booking");
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http:localhost:${PORT}`);
});
