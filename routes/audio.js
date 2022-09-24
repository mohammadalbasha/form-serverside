
const express = require('express');
 const audioRouter = express.Router();

const audioController = require('../controllers/audio');
const router = require('./surveys');

 
 audioRouter.get('/', audioController.getTracks);
 audioRouter.get('/:trackID', audioController.getTrack);
 
 audioRouter.post('/', audioController.addTrack);

 
 module.exports = audioRouter;

 