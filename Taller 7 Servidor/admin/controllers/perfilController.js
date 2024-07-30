const Perfil = require('../models/perfil');

exports.getAll = async (req, res) => {
    try {
        const perfiles = await Perfil.findAll();
        res.status(200).json(perfiles);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
