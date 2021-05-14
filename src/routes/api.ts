import express from 'express';
import { getPhotos } from '../services/MarsPhotoService';
var router = express.Router();

//Accepts date as query param
//Date can be any form of datestring that is parseable by new Date(string)
//return 200 and json for the mars photos from the given date
//returns 400 if date is missing
//returns 500 if error
router.get('/photo', function(req, res) {
    let date = req?.query?.date as string;
    if (!date) res.status(400).send("Expected a query param date with a valid datestring");
    getPhotos(date)
    .then(photos => {
        res.status(200).send(photos);
    })
    .catch(err => {
        res.status(500).send(err);
    });
    
});

export default router;
