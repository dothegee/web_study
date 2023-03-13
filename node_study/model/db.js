var Sequelize = require("sequelize");
var sequelize;

sequelize = new Sequelize("class101","root","qpemfh2021!",{
    host:"localhost",
    port:3306,
    dialect:"mysql",
    timezone:"+09:00",
    define:{
        charset:"utf8",
        collate:"utf8_general_ci",
        timestamps:true,
        freezeTableName:true
    }
})

var db = {};

