// /models/profileModel.js
const mysql = require('mysql2');

// MySQL connection setup
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Change this to your MySQL user
    password: '',  // Change this to your MySQL password
    database: 'growbiz'  // Change this to your database name
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

const createProfile = (profile, callback) => {
    const { name, businessName, email, phone, website, description, imageUrl, country, city } = profile;
    const query = 'INSERT INTO profiles (name, businessName, email, phone, website, description, imageUrl, country, city) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [name, businessName, email, phone, website, description, imageUrl, country, city], callback);
};

const getProfileById = (id, callback) => {
    const query = 'SELECT * FROM profiles WHERE id = ?';
    connection.query(query, [id], callback);
};

const updateProfileById = (id, profile, callback) => {
    const { name, businessName, email, phone, website, description, imageUrl, country, city } = profile;
    const query = 'UPDATE profiles SET name = ?, businessName = ?, email = ?, phone = ?, website = ?, description = ?, imageUrl = ?, country = ?, city = ? WHERE id = ?';
    connection.query(query, [name, businessName, email, phone, website, description, imageUrl, country, city, id], callback);
};

module.exports = {
    createProfile,
    getProfileById,
    updateProfileById
};
