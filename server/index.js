const { app } = require('./app');
require('dotenv').config();

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
