const connection = require("./connection.js");

// ORM
// =============================================================

const orm = {
  allBurgers: function(callback) {
    let s = "SELECT * FROM burgers";

    connection.query(s, function(err, result) {
      if (err) callback(err, null);
      callback(null, result);
    });
  },

  searchCharacter: function(name, callback) {
    var s = "select * from " + burgers + " where routeName=?";

    connection.query(s, [name], function(err, result) {
      callback(result);
    });
  },
  insertOne: function(burgerName, callBack) {
    const sqlQuery = `insert INTO burgers(burger_name) VALUES(${burgerName})`;
    connection.query(sqlQuery, function (err, data){
      callBack(null, data);
    });
  }
};

module.exports = orm;
