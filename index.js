const express = require('express');
const cors= require('cors');
const bodyParser = require('body-parser');
const filmsRouter = require('./FIlms/filmsrouter');
const charactersRouter = require('./Characters/charactersRouter')

const app = express();
const corsMiddleware = cors();
const parserMiddleware = bodyParser.json();
const port = 4000;

app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(filmsRouter);
app.use(charactersRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports=app;

