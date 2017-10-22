var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.post('/', function (req, res) {
    //console.log('new property to store: ', req.body);
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(
                'INSERT INTO "logs"("pin", "zone", "emotion", "responderalerted") VALUES ($1, $2, $3, $4);',
                [req.body.PIN, req.body.Zone, req.body.Emotion, req.body.responderAlerted], 
                function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    console.log('results sent');
                    res.send(result.rows);
                }//end of nested else
            });//end of client.query
        } //end of first else
    });// end of pool.connect
//need sql code
});//end of router.post

module.exports = router;