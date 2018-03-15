/**
 * Created by Bismah Qadri on 3/14/2018.
 */
var Sequelize = require("sequelize");
var config = require("./connections_string.json").local;


var sequelize = new Sequelize(config.database, config.username, config.password, {
    /* Optional Params
     timezone: '+05:30',
     */
    host: config.host,
    dialect: 'mysql',
    timezone: '+04:00',
    pool: {
        max: 5,
        min: 0,
        idle: 20000
    }
});

sequelize.sync({force : false});

module.exports = sequelize;