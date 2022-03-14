const { DataTypes } = require('sequelize');

const Attributes = { id: {
  autoIncrement: true,
  type: DataTypes.INTEGER,
  primaryKey: true,
  allowNull: false,
},
title: {
  type: DataTypes.STRING,
},
content: {
  type: DataTypes.STRING,
},
userId: {
  type: DataTypes.INTEGER,
  allowNull: false,
},
published: {
  type: DataTypes.DATE,
},
updated: {
  type: DataTypes.DATE,
},

};

module.exports = (sequelize) => {
  const BlogPost = sequelize.define('BlogPost', Attributes,
  { timestamps: false,
  tableName: 'BlogPosts' });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};