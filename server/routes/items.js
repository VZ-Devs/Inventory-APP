const express = require('express');
const router = express.Router();
const { Item } = require('../models');

// GET /items
router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// POST /items
router.post('/', async (req, res, next) => {
  try {
    const items = await Item.create(req.body);
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET /items/:slug
router.get('/:slug', async (req, res, next) => {
  try {
    const item = await Item.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    if (item === null) {
      res.status(404).send(notFoundPage());
    } else {
      res.send(page);
    }
  } catch (error) {
    next(error);
  }
});

// DELETE /items/:id
router.delete("/:id", async (req, res, next) => {
  try {
    await Item.destroy({
        where: {
          id: req.params.id
        }
    })
    const items = await Item.findAll();
    console.log(items)
    res.send(items)
  } catch(error) {
    next(error)
  }
})


module.exports = router;
