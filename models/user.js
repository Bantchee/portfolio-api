const { stringify } = require('jade/lib/utils');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: Strin, maxLength: 100 },
    email: { type: String },
    password: { type: String, maxLength: 100 },
    permissions: {
        type: stringify,
        enum: ["adim", "base"],
        default: "base",
    },
    creation_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);