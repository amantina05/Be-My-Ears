import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllImages} from '../store'
import {Link} from 'react-router-dom'

class textToASL extends Component {
  componentDidMount() {
    this.props.getAllImages()
  }
  render() {
    const {images} = this.props
    console.log('trying to find images', this.props)
    return (
      <div>
        <h2>Text To ASL</h2>

        <input
          type="text"
          id="myInput"
          onKeyUp="myfunction()"
          placeholder="Search for the sign"
        />

        {images.map(image => {
          return (
            <li key={image.id}>
              <Link to={`/images/${image.id}`}>
                <p>{image.name}</p>
              </Link>
              <img src={image.imageUrl} width="190" height="190" />
            </li>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    images: state.image.allImages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllImages: () => dispatch(getAllImages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(textToASL)
