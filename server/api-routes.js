const express = require("express");
const router = express.Router();
const logger = require('./logger');

router.get("/getMissionList", (req, res) => {
    logger.log('info', '%s', req.originalUrl);
    
    res
    .header("")
    .status(200)
    .json({
        val:1
    });
    
});

router.post("/addNewMission", (req, res) => {
    logger.log('info', '%s', req.originalUrl);

    res
    .header("")
    .status(200)
    .json(JSON.parse(response.body));
    
});

router.post("/editMission", (req, res) => {
    logger.log('info', '%s', req.originalUrl);

    const id = req.query.id;
    
        res
        .header("")
        .status(200)
        .json(JSON.parse(response.body));
    
});

module.exports = router;