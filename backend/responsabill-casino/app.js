const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('../config/database');
const routes = require('../routes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await sequelize.sync(); // Initialize database
});