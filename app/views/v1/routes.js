// External dependencies
const express = require('express');
const router = express.Router();

// Basic journey route
router.post('/basic-routing-radio', (req, res) => {
    let likeDogs = req.session.data['basicDogs']
    if (likeDogs == "yes"){
        res.redirect("basic-like-dogs")
    } else {
        res.redirect("basic-dislike-dogs")
    }
});

// Complex journey route
router.post('/complex-name', (req, res) => {
    let name = req.session.data['name']
    if (name == ""){
        res.redirect("complex-name-error")
    } else if (name == "bali" || name == "ralph"){
        res.redirect("clever-dog")
    } else {
        res.redirect("complex-finish")
    }
});

module.exports = router;