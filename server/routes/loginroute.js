var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/:pin', function (req, res) {
    let pin = req.params.pin
    console.log('pin to check for: ', pin);
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(
                "SELECT * FROM participant WHERE pin=$1", [pin]
                , function (errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error making database query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        console.log('results sent', result.rows);
                        res.send(result.rows);
                    }//end of nested else
                });//end of client.query
        } //end of first else
    });// end of pool.connect
    //need sql code
});//end of router.post

module.exports = router;