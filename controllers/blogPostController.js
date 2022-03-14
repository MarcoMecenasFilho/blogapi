const { BlogPost, PostCategory } = require('../models');
const {checkCategory} = require('../helper/checkCategory')

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { userId } = req.tokenData;
    const published = new Date();
    const updated = published;

    const categoriesChecked = checkCategory(categoryIds)
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



module.exports = {
  create,
  };