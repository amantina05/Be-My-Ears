const Sequelize = require('sequelize')
const db = require('../db')

const Video = db.define('video', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  videoUrl: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Video
