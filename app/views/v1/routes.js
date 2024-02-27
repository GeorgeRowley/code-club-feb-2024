// External dependencies
const express = require('express');
const router = express.Router();

router.post('/basic-routing-radio', (req, res) => {
    let likeDogs = req.session.data['basicDogs']
    if (likeDogs == "yes"){
        res.redirect("basic-like-dogs")
    } else {
        res.redirect("basic-dislike-dogs")
    }
});

module.exports = router;