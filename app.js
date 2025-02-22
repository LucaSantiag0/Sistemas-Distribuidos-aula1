const express = require('express');
const userRoutes = require('./routes/userRoutes');
const swaggerConfig = require('./swagger/swagger');

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
swaggerConfig(app);

module.exports = app;