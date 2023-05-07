const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: { type: String, require: true, maxLength: 100 },
    projectType: {
        type: String,
        required: true,
        enum: ["Full Stack", "Front End", "Back End"],
        default: "Full Stack",
    },
    description: { type: String, require: true },
    img: {
        data: Buffer,
        require: true,
        contentType: String,
    },
    siteLink: { type: String, require: true },
    codeLink: { type: String, require: true },
});

module.exports = mongoose.model('Project', ProjectSchema);