
const express = require("express"); 
const routes = require("./router");    //Import the routes

const app = express();    // Initialize an express instance

const PORT = process.env.PORT || 5000;  // Define the port
app.use(express.json());

app.get("/", (req, res) => {        // Health check endpoint (optional)
  return res.json({ status: "Up and running" });
});

app.use(routes);                  

app.listen(PORT,                  // Start listenting for requests
    () => console.log("Server started listening!"));