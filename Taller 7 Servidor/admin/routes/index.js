var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const perfilController = require('../controllers/perfilController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/usuarios', usuarioController.create);
router.get('/perfiles', perfilController.getAll);
router.get('/usuarios', usuarioController.getAll);

module.exports = router;
