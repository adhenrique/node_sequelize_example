module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        text: DataTypes.STRING,
    });

    // Post.associate = (db) => {
    //     db.posts.belongsTo(db.users, { foreignKey: 'userId' });
    // };

    return Post;
};
