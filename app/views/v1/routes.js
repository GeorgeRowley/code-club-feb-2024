const express = require('express');
const router = express.Router();

router.post('basic-routing-radio-router', function(request, response) {

    let name = request.session.data['name']
    if (name == "George"){
        response.redirect("/v5/option-two-one/direct-debit/check-answers")
    } else {
        response.redirect("/v5/option-two-one/direct-debit/change-address")
    }
  })

module.exports = router;
