const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: { type: String, maxLength: 100 },
    projectType: {
        type: String,
        enum: ["Full Stack", "Front End", "Back End"],
        default: "Full Stack",
    },
    description: { type: String},
    img: {
        data: Buffer,
        contentType: String,
    },
    siteLink: { type: String},
    codeLink: { type: String},
});

module.exports = mongoose.model('Project', ProjectSchema);