const { Category } = require('../models');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    const newCategory = await Category.create({ name });
    
    return res.status(201).json(newCategory);
  } catch (e) {
    next(e);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const allCategories = await Category.findAll();
    return res.status(200).json(allCategories);
  } catch (error) {
    next(error);
  }
};

module.exports = { 
  create, 
  getAll };