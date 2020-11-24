const port = 3003 || process.env.port;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./src/routes');
const db = require('./src/config/db');

const swaggerUI = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

 app.use(express.json());

app.use(router);

app.db = db;

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});