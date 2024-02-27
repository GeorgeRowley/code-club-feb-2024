// External dependencies
const express = require('express');
const router = express.Router();

// Routes for v1
const versionOne = require('./views/v1/routes')
router.use('/v1', versionOne);

router.post('/v1/basic-routing-radio', (req, res) => {
    let likeDogs = req.session.data['basicDogs']
    if (likeDogs == "yes"){
        res.redirect("basic-like-dogs")
    } else {
        res.redirect("basic-dislike-dogs")
    }
});

module.exports = router;
