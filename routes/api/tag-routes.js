const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//GET all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({ include: [{ model: Product }] });
    res.status(200).json(tagData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

//GET one tag
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//POST create a new tag
router.post('/', (req, res) => {
  // create a new tag
   /* req.body should look like this...
    {
     "tag_name": "education"
    }
  */
    Tag.create({
      tag_name: req.body.tag_name
    })
      .then((newTag) => {
        res.json(newTag)
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      })
});

//PUT update tag
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, { where: { id: req.params.id } })
    .then((updatedTag) => res.json(updatedTag))
    .catch((err) => {
      console.log(err);
      res.json(err);
    })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: { id: req.params.id } 
  })
    .then((deletedTag)=>{
      res.json(deletedTag);
    })
    .catch((err)=>{
      console.log(err);
      res.status(400).json(err)});
});

module.exports = router;
