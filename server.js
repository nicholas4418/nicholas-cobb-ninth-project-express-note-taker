const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

//The following sets up express to handle data parsing

//Retrieve CSS and JS
app.use(express.static('public'));
//Middleware for parsing JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);