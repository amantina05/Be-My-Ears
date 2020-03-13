import axios from 'axios'
import {combineReducers} from 'redux'

/**
 * ACTION TYPES
 */
const GET_IMAGES = 'GET_IMAGES'
const GET_SINGLE_IMAGE = 'GET_SINGLE_IMAGE'

/**
 * ACTION CREATORS
 */
const gotImages = images => ({
  type: GET_IMAGES,
  images
})

const gotSingleImage = image => ({
  type: GET_SINGLE_IMAGE,
  image
})

/**
 * THUNK CREATORS
 */
export const getAllImages = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/images')
      dispatch(gotImages(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const getSingleImage = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/images/${id}`)
      dispatch(gotSingleImage(data))
    } catch (error) {
      console.error(error)
    }
  }
}
/**
 * REDUCERS
 */
function allImagesReducer(images = [], action) {
  switch (action.type) {
    case GET_IMAGES:
      return action.images
    default:
      return images
  }
}

function singleImageReducer(image = {}, action) {
  switch (action.type) {
    case GET_SINGLE_IMAGE:
      return action.image
    default:
      return image
  }
}

const rootReducer = combineReducers({
  allImages: allImagesReducer,
  singleImage: singleImageReducer
})

export default rootReducer
