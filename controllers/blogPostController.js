const { Op } = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');
const checkCategory = require('../helper/checkCategory')

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { userId } = req.tokenData;
    const published = new Date();
    const updated = published;

    const categoriesChecked = await checkCategory(categoryIds)
    if (!categoriesChecked) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
    const newPost = await BlogPost.create({ title, content, userId, published, updated }); 
    
    await Promise.all(categoryIds.map((ids) => PostCategory
    .create({ postId: newPost.id, categoryId: ids })));

    return res.status(201).json({ id: newPost.id, userId, title, content });
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const allPosts = await BlogPost.findAll(
      { include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ] },
    );

    return res.status(200).json(allPosts);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const postById = await BlogPost.findOne({ where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ] });
      
    if (!postById) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(postById);
  } catch (error) {
    next(error);
  }
};

const getByTerm = async (req, res, next) => {
  try {
    const { q } = req.query;
    const postsByTerm = await BlogPost.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${q}%` } },
          { content: { [Op.like]: `%${q}%` } },
        ],
      },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return res.status(200).json(postsByTerm);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const postOwnerId = await BlogPost.findByPk(id);
    const { userId } = req.tokenData;
    if (!postOwnerId) return res.status(404).json({ message: 'Post does not exist ' });
  
    if (postOwnerId.userId !== userId) {
      return res.status(401).json({ message: 'Unauthorized user' }); 
}

    await BlogPost.update(req.body, { where: { id } });
    const postById = await BlogPost.findOne({
      where: { id },
      include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
    });

    return res.status(200).json(postById);
  } catch (error) {
    next(error);
  }
};

const exclude = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req.tokenData;
    const postOwnerId = await BlogPost.findOne({ where: { id } });

    if (!postOwnerId) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    if (postOwnerId.id !== userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    await BlogPost.destroy({ where: { id } });

    return res.status(204).json({});
  } catch (error) {
    next(error);
  }
};



module.exports = {
  create,
  getAll,
  getById,
  getByTerm,
  update,
  exclude
  };