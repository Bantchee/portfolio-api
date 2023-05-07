const Project = require('../models/project');
const async = require('async');
const { body, validationResult } = require('express-validator');

// Send all projects
exports.projects_list = (req, res, next) => {
    Project.find()
        .sort(['title', 'asc'])
        .exec(function (err, list_farms) {
            if(err) {
                return next(err);
            }
            res.send(list_farms);
        });
}