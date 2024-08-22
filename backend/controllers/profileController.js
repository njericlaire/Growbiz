// /controllers/profileController.js
const profileModel = require('../models/profileModel');

const createProfile = (req, res) => {
    const profile = req.body;
    profileModel.createProfile(profile, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: results.insertId });
    });
};

const getProfileById = (req, res) => {
    const { id } = req.params;
    profileModel.getProfileById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results[0]);
    });
};

const updateProfileById = (req, res) => {
    const { id } = req.params;
    const profile = req.body;
    profileModel.updateProfileById(id, profile, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Profile updated successfully' });
    });
};

module.exports = {
    createProfile,
    getProfileById,
    updateProfileById
};
