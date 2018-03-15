/**
 * Created by Bismah Qadri on 3/14/2018.
 */
var Sequelize = require("sequelize");
var sequelize = require("../datasources/db_config")
var User = sequelize.define('user', {
    userID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: Sequelize.STRING,
    firstName: Sequelize.STRING,
    emailId: Sequelize.STRING
});
module.exports = User;