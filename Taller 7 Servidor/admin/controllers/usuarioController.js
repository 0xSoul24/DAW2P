const Usuario = require('../models/usuario');
const Perfil = require('../models/perfil');

exports.create = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            include: {
                model: Perfil,
                attributes: ['descripcion']
            }
        });
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
