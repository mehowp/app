// in models/User
let model = (sequelize, DataTypes) => {
    return database.define('User', {
        login: DataTypes.STRING,
    }, {
        instanceMethods: {
            Auth: function() {
                // how to implement this method ?
            }
        }
    });	
}
module.exports = model;