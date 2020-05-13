const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const logRequest = require('./app/middlewares/LogRequests');
const ValidateProjectId = require('./app/middlewares/ValidateProjectId');

const app = express();

app.use(cors());
app.use(express.json());

app.use(logRequest);
app.use('/project/:id', ValidateProjectId);

app.use(routes);

app.listen(3333, () => {
  console.log('🚀️ Back-end started!!');
});
