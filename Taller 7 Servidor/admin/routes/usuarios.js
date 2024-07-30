var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Crear un nuevo usuario
router.post('/', usuarioController.create);

// Obtener todos los usuarios con la descripción del perfil
router.get('/', usuarioController.getAll);

module.exports = router;
