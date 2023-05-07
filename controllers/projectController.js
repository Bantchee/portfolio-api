const Project = require('../models/project');
const async = require('async');
const { body, validationResult } = require('express-validator');

// Send all projects
exports.projects_list = async (req, res, next) => {
    const projects = await Project.find()
        .sort([['title', 'asc']])
        .exec();

    projects.then((list) => {
       res.send(list);
    }).catch((err) => {
        next(err);
    });
}