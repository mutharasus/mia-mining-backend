const router = require('express').Router();
let Blob = require('../models/blob.model');

router.route('/').get((req, res) => {
    Blob.find()
        .then(blob => res.json(blob))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    const blob_name = req.body.blob_name;
    const blob_date = Date.parse(req.body.blob_date);
    const blob_value = req.body.blob_value;

    const newBlob = new Blob({
        blob_name,
        blob_value,
        blob_date
    });

    newBlob.save()
        .then(() => res.json('Blob added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;