const db = require('../config/db');

class User {
    static create({ name, email, password }, callback) {
        const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
        db.run(query, [name, email, password], function (err) {
            callback(err, this.lastID);
        });
    }

    static findByEmail(email, callback) {
        const query = `SELECT * FROM users WHERE email = ?`;
        db.get(query, [email], callback);
    }

    static findAll(callback) {
        const query = `SELECT id, name, email, created_at FROM users`;
        db.all(query, callback);
    }

    static update(id, { name, email }, callback) {
        const query = `UPDATE users SET name = ?, email = ? WHERE id = ?`;
        db.run(query, [name, email, id], callback);
    }
}

module.exports = User;