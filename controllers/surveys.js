const Survey = require('../models/Survery');

module.exports.addSurvey = (req, res, next) => {
    const {name, email, country, ratings : genresRatings} = req.body;
    const survey = new Survey({
        name,
        email,
        country,
        genresRatings 
    });
    survey.save()
        .then (survey_doc => {
            res.status(200).json(survey_doc);
        })
        .catch(err => {
            next(err);
        })

}

module.exports.getSurveys = (req, res, next) => {
    Survey.find()
            .then (surveys => {
                res.status(200).json(surveys);
            })
            .catch(err => {
                next(err);
            })
}
