const User = require('../models/User')
const Role = require('../models/Role');

let userController = {

    index: async (req, res, next) => {
        User.findAll().then((users) => {
            res.render('users/users_data', { title: 'Users Data', 'users': users });
        }).catch((error) => {
            console.log(error);
        })
    },

    add_user: async (req, res) => {
        Role.findAll().then((roles) => {
            res.render('users/adduser', { title: 'Add User Data', 'roles': roles });
        }).catch((error) => {
            console.log(error);
        })

    },

    insertUser: async (req, res) => {
        User.create(req.body).then((user) => {
            res.redirect("users/user_data")
        }).catch((error) => {
            console.log(error);
        });


    },

    deleteUser: async (req, res) => {
        User.destroy({
            where: {
                id: req.body.id
            }
        }).then((result) => {
            res.status(200);
        }).catch((error) => {
            console.log(error);
            res.status(500);
        })
    },


    editUser: async (req, res) => {
        var id = req.params.id;
        User.findOne({
            where: {
                id: id
            }
        }).then((user) => {
            console.log(user);
            Role.findAll().then((roles) => {
                res.render('users/edit_user', { title: 'User Data', 'user': user, 'roles': roles });
            }).catch(error => {
                console.log(error);
            })
        }).catch(error => {
            console.log(error);
        });
    },

    updateUser: async (req, res) => {
        var id = req.params.id;

        User.findOne({
            where: {
                id: id
            }
        }).then(User => {
            User.update(req.body, {
                where: {
                    id: id
                }
            }).then((updated) => {
                res.redirect('users/user_data');
            }).catch((error) => {
                console.log(error);
            })
        }).catch(error => {
            console.log(error);
        })
    }
}

module.exports = userController;