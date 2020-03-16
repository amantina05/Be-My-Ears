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
    const pageSize = 8
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
        <nav>
          <center>
            <Link to="/videos">
              <p>#</p>
            </Link>
            <Link to="/texttoasl/videos">
              <p>a</p>
            </Link>
            <Link to="/videos">
              <p>b</p>
            </Link>
            <Link to="/videos">
              <p>c</p>
            </Link>
            <Link to="/videos">
              <p>d</p>
            </Link>
            <Link to="/videos">
              <p>e</p>
            </Link>
            <Link to="/videos">
              <p>f</p>
            </Link>
            <Link to="/videos">
              <p>g</p>
            </Link>
            <Link to="/videos">
              <p>h</p>
            </Link>
            <Link to="/videos">
              <p>i</p>
            </Link>
            <Link to="/videos">
              <p>j</p>
            </Link>
            <Link to="/videos">
              <p>k</p>
            </Link>
            <Link to="/videos">
              <p>l</p>
            </Link>
            <Link to="/videos">
              <p>m</p>
            </Link>
            <Link to="/videos">
              <p>n</p>
            </Link>
            <Link to="/videos">
              <p>o</p>
            </Link>
            <Link to="/videos">
              <p>p</p>
            </Link>
            <Link to="/videos">
              <p>q</p>
            </Link>
            <Link to="/videos">
              <p>r</p>
            </Link>
            <Link to="/videos">
              <p>s</p>
            </Link>
            <Link to="/videos">
              <p>t</p>
            </Link>
            <Link to="/videos">
              <p>u</p>
            </Link>
            <Link to="/videos">
              <p>v</p>
            </Link>
            <Link to="/videos">
              <p>w</p>
            </Link>
            <Link to="/videos">
              <p>x</p>
            </Link>
            <Link to="/videos">
              <p>y</p>
            </Link>
            <Link to="/videos">
              <p>z</p>
            </Link>
          </center>
        </nav>
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
