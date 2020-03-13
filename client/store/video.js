import axios from 'axios'
import {combineReducers} from 'redux'

/**
 * ACTION TYPES
 */
const GET_VIDEOS = 'GET_VIDEOS'
const GET_SINGLE_VIDEO = 'GET_SINGLE_VIDEO'

/**
 * ACTION CREATORS
 */
const getVideos = videos => ({
  type: GET_VIDEOS,
  videos
})

const gotSingleVideo = video => ({
  type: GET_SINGLE_VIDEO,
  video
})

/**
 * THUNK CREATORS
 */
export const getAllVideos = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/videos')
      dispatch(getVideos(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const getSingleVideo = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/videos/${id}`)
      dispatch(gotSingleVideo(data))
    } catch (error) {
      console.error(error)
    }
  }
}

/**
 * REDUCERS
 */
function allVideosReducer(videos = [], action) {
  switch (action.type) {
    case GET_VIDEOS:
      return action.videos
    default:
      return videos
  }
}

function singleVideoReducer(video = {}, action) {
  switch (action.type) {
    case GET_SINGLE_VIDEO:
      return action.video
    default:
      return video
  }
}

const rootReducer = combineReducers({
  allVideos: allVideosReducer,
  singleVideo: singleVideoReducer
})

export default rootReducer
