import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllImages, getAllVideos} from '../store'
import {Link} from 'react-router-dom'
import FilterForm from './filterForm'

class textToASL extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     images: [],
  //     filteredImages: []
  //   }
  // }

  componentDidMount() {
    this.props.getAllImages()
    this.props.getAllVideos()
  }

  // componentWillMount() {
  //   this.setState({
  //     images,
  //     filteredImages: images
  //   })
  // }

  // filteredImages = textFilter => {
  //   let filteredImages = this.state.images
  //   filteredImages = filteredImages.filter(image => {
  //     let imageName = image.name.toLowerCase()
  //     return imageName.indexOf(textFilter.toLowerCase()) !== -1
  //   })
  //   this.setState({
  //     filteredImages
  //   })
  // }

  render() {
    const {images} = this.props
    const {videos} = this.props
    console.log('trying to find images', this.props)
    return (
      <div className="textToASL">
        <h2>Text To ASL</h2>
        <br />

        {/* <FilterForm
          text={this.state.filteredImages}
          match={this.props.match}
          onChange={this.filteredImages}
        /> */}

        {images.map(image => {
          return (
            <ol key={image.id}>
              <Link to={`/images/${image.id}`}>
                <p>{image.name}</p>
              </Link>
              <br />
              <img src={image.imageUrl} width="190" height="190" />
              <br />
            </ol>
          )
        })}

        {videos.map(video => {
          return (
            <ol key={video.id}>
              <Link to={`/videos/${video.id}`}>
                <p>{video.name}</p>
              </Link>
              <br />
              <img src={video.imageUrl} width="190" height="190" />
              <br />
            </ol>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    images: state.image.allImages,
    videos: state.video.allVideos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllImages: () => dispatch(getAllImages()),
    getAllVideos: () => dispatch(getAllVideos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(textToASL)
