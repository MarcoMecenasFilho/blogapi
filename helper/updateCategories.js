const { PostCategory, Category } = require('../models');

const updateCategories = async (postId) => {
  const categoriesIds = await PostCategory.findAll({ where: { postId } });
  console.log(categoriesIds);
  const allCategoriesWithId = await Promise.all(categoriesIds
    .map(({ dataValues }) => Category.findByPk(dataValues.categoryId)));

    return allCategoriesWithId.map(({ dataValues }) => dataValues);
};

module.exports = { updateCategories };