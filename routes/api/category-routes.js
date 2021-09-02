const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//GET all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }

});

//GET one category
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//POST create a new category
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
     "category_name": "Food"
    }
  */
  Category.create({
    category_name: req.body.category_name
  })
    .then((newCategory) => {
      res.json(newCategory)
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, { where: { id: req.params.id } })
    .then((updatedCategory) => res.json(updatedCategory))
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id } 
  })
    .then((deletedCategory)=>{
      res.json(deletedCategory);
    })
    .catch((err)=>{
      console.log(err);
      res.status(400).json(err)});
});

module.exports = router;
