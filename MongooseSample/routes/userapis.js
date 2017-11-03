var User = require('./model/User');

function createUser(req, res) {

    var newUser = User({
        id: req.param("id"),
        name: req.param("name"),
        username: req.param("username"),
        password: req.param("password")
    });
    res.setHeader('Content-Type', 'application/json');
    newUser.save(function(err) {
        console.log("ee" + err);
        if (err) {
            res.send(JSON.stringify({
                code: 500,
                msg: "User creation failed with error : " + err
            }));
        } else {
            res.send(JSON.stringify({
                code: 200,
                msg: "User creation successfully"
            }));
        }

    });
}

function getUser(req, res) {

    res.setHeader('Content-Type', 'application/json');

    User.find({ id: req.param("id") }, function(err, user) {
        if (err) {
            res.send(JSON.stringify({
                code: 500,
                msg: "User creation failed with error : " + err
            }));
        } else {
            res.send(JSON.stringify({
                code: 200,
                user: user,
                msg: "User creation successfully"
            }));
        }
    });

}

function deleteUser(req, res) {

    res.setHeader('Content-Type', 'application/json');
    User.remove({ id: req.param("id") }, function(err) {
        if (err) {
            res.send(JSON.stringify({
                code: 500,
                msg: "User deleted failed with error : " + err
            }));
        } else {

            res.send(JSON.stringify({
                code: 200,
                msg: "User deleted successfully"
            }));

        }


    });

}

function updateUser(req, res) {

    res.setHeader('Content-Type', 'application/json');
    User.findOne({ id: req.param("id") }, function(err, user) {

        user.password = req.param("password");
        user.save(function(err) {

            if (err) {
                res.send(JSON.stringify({
                    code: 500,
                    msg: "User update failed with error : " + err
                }));
            } else {

                res.send(JSON.stringify({
                    code: 200,
                    user: user,
                    msg: "User update successfully"
                }));

            }
        });
    });

}

exports.createUser = createUser;
exports.getUser = getUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;