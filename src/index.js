const express = require("express");
const routes = require("./routes/user.route");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const setupSwagger = require('./swagger');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
// Swagger docs
setupSwagger(app);
app.use(routes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
  console.log('Documentación disponible en http://localhost:3000/api-docs');
});
