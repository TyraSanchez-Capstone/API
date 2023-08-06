const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true

    },

    userjoinedApp: {
        type: String,
        required: true

    },

    userJoinDate: {
        type: Date,
        required: true,
        default: Date.now

    }
})

module.exports = mongoose.model("user", userSchema)
