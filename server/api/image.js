const router = require('express').Router()
const {Image} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const all = await Image.findAll({
      attributes: ['id', 'name', 'imageUrl', 'description']
    })
    res.json(all)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const individual = await Image.findByPk(req.params.id)
    if (!individual) {
      const error = Error('Sorry we currently do not have that image listed')
      error.status = 404
      return next(error)
    } else {
      res.json(individual)
    }
  } catch (error) {
    console.error(error)
  }
})
