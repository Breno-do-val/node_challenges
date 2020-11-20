const port = 3003 || process.env.port;
const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./src/routes');
const db = require('./src/config/db');
const { json } = require('body-parser');

 app.use(json());

app.use(router);

app.db = db;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});