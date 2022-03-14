const { Category} = require('../models');

module.exports = async (categoryIds) => {
  const allCategoriesRegistered = await Category.findAll();
  const allCategoriesRegisteredIds = await allCategoriesRegistered.map(({ id }) => id);
  const allCategoriesExist = categoryIds.every((ids) => allCategoriesRegisteredIds.includes(ids));
  return allCategoriesExist
}

