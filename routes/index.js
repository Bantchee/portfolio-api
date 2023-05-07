var express = require('express');
var router = express.Router();

// Controllers
const projectController = require('../controllers/projectController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/projects', projectController.projects_list);

module.exports = router;
