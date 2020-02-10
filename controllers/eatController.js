const express = require("express");
const router = express.Router(); 
const eat = require("../models/eat");

router.get("/", function(req, res) {
    eat.all(function(burgerType) {
        res.render("index", { burger_type: burgerType });
    });
});

router.post("/api/burgers", function(req, res) {
    eat.create(req.body.name, function(result) {
        console.log(result);
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);

    eat.update({
        devour: req.body.devour
    }, condtion, function(result) {
        if (result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;