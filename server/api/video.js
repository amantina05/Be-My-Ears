const router = require('express').Router()
const {Video} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const all = await Video.findAll({
      attributes: ['id', 'name', 'videoUrl', 'description']
    })
    res.json(all)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const individual = await Video.findByPk(req.params.id)
    if (!individual) {
      const error = Error('Sorry we currently do not have that video listed')
      error.status = 404
      return next(error)
    } else {
      res.json(individual)
    }
  } catch (error) {
    console.error(error)
  }
})
