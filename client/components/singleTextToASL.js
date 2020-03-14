import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleImage} from '../store'
import {Link} from 'react-router-dom'

class singleTextToASL extends Component {
  componentDidMount() {
    this.props.getSingleImage(this.props.match.params.id)
  }
  render() {
    const {image} = this.props
    console.log(this.state)
    return (
      <div>
        <center>
          <img src={image.imageUrl} width="190" height="190" />
          <h2>Name: </h2>
          <h3>{image.name}</h3>
          <h2>Description: </h2>
          <h3>{image.description}</h3>

          <Link to="/texttoasl">
            <p>Back to ASL images/ videos</p>
          </Link>
        </center>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    image: state.image.singleImage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleImage: id => dispatch(getSingleImage(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(singleTextToASL)
