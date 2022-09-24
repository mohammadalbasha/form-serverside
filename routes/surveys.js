const express = require('express');
const router = express.Router();

const surveysController = require('../controllers/surveys');

router.post('/' , surveysController.addSurvey);

router.get('/', surveysController.getSurveys);

module.exports = router;