const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    authors: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    title: { type: String, require: true, maxLength: 100 },
    content: { type: String, require: true },
    comments: [{ type: Schema.Types.ObjectId, ref:'BlogComment' }],
    creation_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);