const express = require("express");
const router = express.Router(); 
const eat = require("../models/eat");

router.get("/burger", function(req, res) {
    eat.all(function(burgerData) {
        res.render("index", { burger_data: burgerData });
    });
});

router.post("/burger/create", function(req, res) {
    eat.create(req.body.name, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res) {

    eat.update(req.params.id, function(result) {
        console.log(result);

        res.status(200).end();
    });
});

module.exports = router;