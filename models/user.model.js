module.exports = () => {

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
          type: Sequelize.BOOLEAN,
          allowNull: false
        }
    });
    
    return User;
}