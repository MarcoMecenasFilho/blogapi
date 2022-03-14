const Category = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
  },
  { timestamps: false,
  tableName: 'Categories' });

  return category;
};

module.exports = Category;
