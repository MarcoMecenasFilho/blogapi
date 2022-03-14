const { Category} = require('../models');

const checkCategory = (categoryIds) => {
  const allCategoriesRegistered = await Category.findAll();
  const allCategoriesRegisteredIds = await allCategoriesRegistered.map(({ id }) => id);
  const allCategoriesExist = categoryIds.every((ids) => allCategoriesRegisteredIds.includes(ids));
  return allCategoriesExist
}

module.export = {
  checkCategory
}