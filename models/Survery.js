const mongoose = require('mongoose');

const tracksRatingsSchema = mongoose.Schema({
    genre : {
        type : String
    },
    track_id : {
        type : String
    },
    rating : {
       type : Number
    }
})

const genreRatingsSchema = mongoose.Schema({
    genre : {
        type : String
    },
    comment : {
        type : String
    },
    ratings : [tracksRatingsSchema]
})


const SurveySchema = mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [(email) => {
                var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return re.test(email)
            }, 
            'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    country : {
        type : String
    },
    genresRatings : [genreRatingsSchema]
})



module.exports = mongoose.model('Survey', SurveySchema);