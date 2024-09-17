// user.js
var express = require('express');
var pwd = require('./mypassword');  // Assuming pwd is your password utility
var connection = require('./connection'); // Assuming connection is your database connection

module.exports = {
    register: function (request, response) {
        var { email, password, mobile } = request.body;
        if (email === undefined || password === undefined || mobile === undefined) {
            response.json([{ 'error': 'input is missing' }]);
        } else {
            pwd.HashPassword(password).then((hash) => {
                let data = [email, hash, mobile];
                var sql = "insert into users (email, password, mobile) values (?, ?, ?)";
                connection.con.query(sql, data, function (error, result) {
                    if (error) {
                        if (error.code === 'ER_DUP_ENTRY')
                            response.json([{ 'error': 'Email/Mobile is already registered with us' }]);
                        else
                            response.json([{ 'error': 'error occurred' }]);
                        console.log(error);
                    } else {
                        response.json([{ 'error': 'no' }, { 'message': 'register successfully' }]);
                    }
                });
            });
        }
    },

    login: function (request, response) {
        var { email, password } = request.body;
        if (email === undefined || password === undefined) {
            response.json([{ 'error': 'input is missing' }]);
        } else {
            var sql = "select id, password from users where email=?";
            var data = [email];
            connection.con.query(sql, data, function (error, result) {
                if (error) {
                    response.json([{ 'error': 'error occurred' }]);
                    console.log(error);
                } else {
                    if (result.length === 0)
                        response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid login' }]);
                    else {
                        var hashed_password = result[0]['password'];
                        var id = result[0]['id'];

                        pwd.MatchPassword(hashed_password, password).then((isMatch) => {
                            if (isMatch) {
                                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'login successful' }, { 'id': id }]);
                            } else {
                                response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'invalid login' }]);
                            }
                        });
                    }
                }
            });
        }
    },

    changePassword: function (request, response) {
        var { id, password, newpassword } = request.body;
        if (id === undefined || password === undefined || newpassword === undefined) {
            response.json([{ 'error': 'input is missing' }]);
        } else {
            let sql = "select password from users where id=?";
            let data = [id];
            connection.con.query(sql, data, function (error, result) {
                if (error) {
                    response.json([{ 'error': 'error occurred' }]);
                    console.log(error);
                } else {
                    if (result.length === 0)
                        response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'authorization failed' }]);
                    else {
                        var hashed_password = result[0]['password'];

                        pwd.MatchPassword(hashed_password, password).then((isMatch) => {
                            if (isMatch) {
                                pwd.HashPassword(newpassword).then((hash) => {
                                    var sql = "update users set password=? where id=?";
                                    let data = [hash, id];
                                    connection.con.query(sql, data, function (error, result) {
                                        if (error) {
                                            response.json([{ 'error': 'password could not be updated' }]);
                                        } else {
                                            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'password changed' }]);
                                        }
                                    });
                                });
                            } else {
                                response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'authorization failed' }]);
                            }
                        });
                    }
                }
            });
        }
    },

    forgotPassword: function (request, response) {
        var email = request.body.email;
        if (email === undefined) {
            response.json([{ 'error': 'input is missing' }]);
        } else {
            var sql = "select password from users where email=?";
            var data = [email];
            connection.con.query(sql, data, function (error, result) {
                if (error) {
                    response.json([{ 'error': 'error occurred' }]);
                    console.log(error);
                } else {
                    if (result.length === 0) {
                        response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'authorization failed' }]);
                    } else {
                        var generator = require("./mypassword");
                        var new_random_password = generator.getRandomPassword(12);

                        pwd.HashPassword(new_random_password).then((hash) => {
                            sql = "update users set password=? where email=?";
                            data = [hash, email];
                            connection.con.query(sql, data, function (error, result) {
                                if (error) {
                                    response.json([{ 'error': 'error occurred' }]);
                                    console.log(error);
                                } else {
                                    var g = require('./gmail');
                                    var e = new g.gmail();
                                    var subject = 'Password recovery email';
                                    var message = 'We have recovered your password. Your new password is ' + new_random_password;
                                    e.send(email, subject, message);
                                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'We have sent your new password to your registered email address' }]);
                                }
                            });
                        });
                    }
                }
            });
        }
    }
};
