const router = require('express').Router()
const axios = require('axios')
module.exports = router

//num of videos you can recieve
const max = 2
const API = process.env.YOUTUBE_CLIENT_SECRET || require('secrets.js')
//can add a parameter to shorten length of video
//https://developers.google.com/youtube/v3/docs/search/list

router.get('/', async (req, res, next) => {
  try {
    // console.log('here')
    //q is used to input what youre querying for
    //asl videos
    const q = 'abc'
    const channelId = 'UC7fVfWv6FL7HeTFeSLz-muQ'
    //find playlist inspect page source and add the id here & then add it into the url after channel id with &${playlistId}
    const playlistId = ''

    //search param searching youtube ?
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&${channelId}&maxResults=${max}&q=${q}&type=video&videoEmbeddable=true&key=${API}`

    const {data} = await axios.get(url)
    res.send(data)
  } catch (error) {
    next(error)
  }
})
