const User = require('./models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { email, password, name, dob, contact } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, encrypted_password: encryptedPassword, name, dob, contact });
    res.status(201).json({ message: 'User registered', user });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    
    if (user && await bcrypt.compare(password, user.encrypted_password)) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        return res.json({ token });
    }
    res.status(401).json({ message: 'Invalid credentials' });
};