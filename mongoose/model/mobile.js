const mongoose = require("mongoose")

const mobile_schema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    dec: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    }
}, {timestamps: true})

module.exports = mongoose.models.mobileModel || mongoose.model('mobileModel', mobile_schema);