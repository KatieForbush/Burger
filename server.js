const express = require("express");

const PORT = process.env.PORT || 3306;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");

app.use("/", routes);

const bodyParser = require("body-parser");

// const jS = require("./js/app");

app.use(express)

// app.use(methodOverride("_method"));
// app.use("/", jS);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
