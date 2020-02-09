const orm = require("../config/orm.js");

const eat = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    create: function(name, cb) {
        orm.create("burgers", ["burger_type", "devoured"], [name, false],
        cb);
    },

    update: function(id, cb) {
        orm.update("burgers", { devoured: true },
        condition,cb);
    },

    delete: function(id, cb) {
        orm.delete("burgers", id, function(res) {
            cb(res);
        });
    }
};

module.exports = eat;