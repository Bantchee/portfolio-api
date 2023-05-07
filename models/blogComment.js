const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogCommentSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    title: { type: String, require: true, maxLength: 100 },
    content: { type: String, require: true, maxLength: 500 },
    creation_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BlogComment', BlogCommentSchema);