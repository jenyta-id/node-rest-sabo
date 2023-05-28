const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /cctv'
    });
});

router.post('/', (req, res, next) => {
    const cctv = {
        name: req.body.name,
        id: req.body.id
    };
    res.status(201).json({
        message: 'Handling POST requests to /cctv',
        createdCctv: cctv
    });
});

router.get('/:cctvId', (req, res, next) => {
    const id = req.params.cctvId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID for CCTV',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID for CCTV'
        });
    }
});

router.put('/:cctvId', (req, res, next) => {
    res.status(200).json({
            message: 'Updated CCTV!'
        });
});

router.delete('/:cctvId', (req, res, next) => {
    res.status(200).json({
            message: 'Deleted CCTV!'
        });
});

module.exports = router;