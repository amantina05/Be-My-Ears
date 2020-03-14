import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleVideo} from '../store'

class singleTextToASL extends Component {
  componentDidMount() {
    this.props.getSingleVideo(this.props.match.params.id)
  }
  render() {
    const {video} = this.props
    return (
      <div>
        <center>
          <video src={video.videoUrl} width="190" height="190" controls />
          <h2>Name: </h2>
          <h3>{video.name}</h3>
          <h2>Description: </h2>
          <h3>{video.description}</h3>
        </center>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    video: state.video.singleVideo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleVideo: id => dispatch(getSingleVideo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(singleTextToASL)
