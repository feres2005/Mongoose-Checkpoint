const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    favoriteFood: { type: Array, required: true },

    created: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('users', userSchema);