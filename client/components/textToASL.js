import React, {Component, useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getAllImages, getAllVideos} from '../store'
import {Link} from 'react-router-dom'
import FilterForm from './filterForm'
import queryString from 'query-string'

class textToASL extends Component {
  componentDidMount() {
    this.props.getAllImages()
    this.props.getAllVideos()
  }

  render() {
    const {images} = this.props
    const {videos} = this.props
    const {location} = this.props
    console.log('trying to find images', this.props)

    let qs = {}
    if (location && location.search) {
      qs = queryString.parse(location.search)
    }

    let page = +qs.page
    const pageSize = 15
    if (!page) {
      page = 1
    }
    let filterImages = images
    let filterVideos = videos
    let query = qs.query

    if (query && qs.query !== '') {
      filterImages = images.filter(image => image.name.toLowerCase() === query)
      filterVideos = videos.filter(video => video.name.toLowerCase() === query)
    } else {
      filterImages = images
      filterVideos = videos
    }

    // let filterImages = images.filter(
    //   image => image.name.toLowerCase() === qs.query
    // )
    // let filterVideos = videos.filter(
    //   video => video.name.toLowerCase() === qs.query
    // )

    let slicedImages = filterImages.slice(
      (page - 1) * pageSize,
      page * pageSize
    )

    let slicedVideos = filterVideos.slice(
      (page - 1) * pageSize,
      page * pageSize
    )

    return (
      <div>
        <h2>Text To ASL</h2>
        <br />
        <center>
          <form method="get" action="/texttoasl">
            <label htmlFor="filter">Filter by word: </label>
            <input
              name="query"
              type="text"
              id="filter"
              placeholder="please use lowercase"
            />
          </form>
        </center>
        <div className="textToASL">
          {slicedImages.map(image => {
            return (
              <ol key={image.id}>
                <Link to={`/images/${image.id}`}>
                  <center>
                    <p>{image.name}</p>
                  </center>
                </Link>
                <br />
                <img src={image.imageUrl} width="190" height="190" />
                <br />
              </ol>
            )
          })}

          {slicedVideos.map(video => {
            return (
              <ol key={video.id}>
                <Link to={`/videos/${video.id}`}>
                  <center>
                    <p>{video.name}</p>
                  </center>
                </Link>
                <br />
                <video src={video.videoUrl} width="190" height="190" controls />
                <br />
              </ol>
            )
          })}
        </div>
        <br />
        <div>
          <center>
            <div>
              <div>
                <Link to={`/texttoasl?page=${page - 1 > 0 ? page - 1 : page}`}>
                  Previous Page
                </Link>
              </div>
              Page {page}
              <div>
                <Link
                  to={`/texttoasl?page=${
                    page + 1 > 0 ? page + 1 : page
                    // page * pageSize <= filterVideos.length ? page + 1 : page
                  }`}
                >
                  Next Page
                </Link>
              </div>
            </div>
          </center>
        </div>
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
