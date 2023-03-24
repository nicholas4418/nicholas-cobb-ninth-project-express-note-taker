const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3001;
const routesHtml = require("./routes/html-routes");
const routesApi = require("./routes/api-routes");

//The following sets up express to handle data parsing

//Retrieve CSS and JS
app.use(express.static('public'));
//Middleware for parsing JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routesApi);
app.use("/", routesHtml);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);