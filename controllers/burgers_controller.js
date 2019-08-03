const express = require("express");

const router = express.Router();
var burger = require("/Users/kate/Desktop/Burger/models/burger.js")

const orm = require("../config/orm.js");

router.get("/", function(req, res) {
  burger.all(function(burgerData) {
    

    console.log(`burgers: `, burgerData);
    //res.send("Hi there");
    res.render("index", { burgers: burgerData });
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(
    ["name", "favorite"],
    [req.body.name, req.body.favorite],
    function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      favorite: req.body.favorite
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.post(`/add`, (req, res) => {

//     const burgerName = req.body.burger_name;

//     orm.insertOne(burgerName, function(erro, burger) {
//       if (error) {
//           return res.status(401).json({
//               message: 'not able to add the burger'
//           })
//       }
//       return res.json({
//           burger_name: burgerName,
//           id: burger.insertId,
//           is_favorite: 0
//       });
//     });
// });
module.exports = router;
