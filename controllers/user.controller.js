const User = require('../libs/models/user.model');

const signup = async (req, res) => {
    const {email, password } = req.body;
    const query = {email};

    const existingUser = await User.findOne(query);
    if (existingUser) {
        //Email already exists
        res.redirect('/signup');
    } else {
        const hashedPassword = await bcrypt.hash(passwword, 10);
        const user = {
            email, 
            password: hashedPassword,
        };
        const result = await User.create(user);
        req.session.userId = result._id;
        res.redirect('dashboard');
    }
};
    


module.exports = {
    //login,
    signup,
    //deleteUser,
};
