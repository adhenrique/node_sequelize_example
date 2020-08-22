module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        text: DataTypes.STRING,
    });

    Post.associate = (db) => {
        db.Post.belongsTo(db.User, { foreignKey: 'userId' });
    };

    return Post;
};
