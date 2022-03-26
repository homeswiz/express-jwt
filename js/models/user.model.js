module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define("User", {
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        }
    });
    
    return User;
}