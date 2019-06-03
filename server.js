const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const routes = require("./models/burger");

const PORT = process.env.PORT || 3306;
const app = express();

app.use(express.static(`public`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
