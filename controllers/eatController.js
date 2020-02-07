const express = require("express");
const router = express.Router(); 
const eat = require("../models/eat");

router.get("/", function(req, res) {
    eat.all(function(data) {
        const hbsObject = {
            eat: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/eat", function(req, res) {
    eat.create([
        "name"
    ], [req.body.name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/eat/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    eat.update({
        devoured: req.body.devoured
    }, conditon, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;