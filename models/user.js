const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, require: true, maxLength: 100 },
    email: { type: String, require: true },
    password: { type: String, require: true, maxLength: 100 },
    creation_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);