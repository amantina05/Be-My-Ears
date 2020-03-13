import axios from 'axios'
import {combineReducers} from 'redux'

/**
 * ACTION TYPES
 */
const GET_IMAGES = 'GET_IMAGES'

/**
 * ACTION CREATORS
 */
const getImages = images => ({
  type: GET_IMAGES,
  images
})

/**
 * THUNK CREATORS
 */
export const getAllImages = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/images')
      dispatch(getImages(data))
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

const rootReducer = combineReducers({
  allImages: allImagesReducer
})

export default rootReducer
