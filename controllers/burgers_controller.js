const express = require("express");

const router = express.Router();

const orm = require(`../config/orm`);

router.get("/", function(req, res) {
    orm.allBurgers(function(error, burgers) {
        if (error) {
          console.log(error);
          res.status(501).json({
            message: `not able to query the database`
            
          });

        }
      
        console.log(`burgers: `, burgers);
        res.render("index", {burgers});
      });
    });

    router.post(`/add`, (req, res) => {
        
        const burgerName = req.body.burger_name;

        orm.insertOne(burgerName, function(erro, burger) {
          if (error) {
              return res.status(401).json({
                  message: 'not able to add the burger'
              })
          }
          return res.json({
              burger_name: burgerName,
              id: burger.insertId,
              is_favorite: 0
          });
        });
    });
module.exports = router;