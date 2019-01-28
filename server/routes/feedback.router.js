const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req, res) => {
    // post route which recieves feedbackReview information that was sent
    // sends info to sql server and stores it there
    console.log('in /feedback POST:', req.body);
    const feedback = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then((responseFromDatabase) => {
            console.log('in responseFromDatabase', responseFromDatabase);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error in POST /feedback', error);
            res.sendStatus(500);
        });
})


module.exports = router;