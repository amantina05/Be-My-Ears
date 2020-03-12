const Sequelize = require('sequelize')
const db = require('../db')

const Image = db.define('image', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Image
