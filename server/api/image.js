const router = require('express').Router()
const {Image} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const all = await Image.findAll({
      attributes: ['name', 'imageUrl', 'description']
    })
    res.json(all)
  } catch (error) {
    next(error)
  }
})
