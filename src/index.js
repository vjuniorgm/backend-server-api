const express = require("express");
const routes = require("./routes/user.route");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.use(routes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
