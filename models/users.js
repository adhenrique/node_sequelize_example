module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    // User.associate = (db) => {
    //     db.users.hasMany(db.posts);
    // };

    return User;
};
