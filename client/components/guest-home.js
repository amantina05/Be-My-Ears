import React, {Component} from 'react'

export default class guestHome extends Component {
  render() {
    return (
      <div>
        <center>
          <h2>Welcome all</h2>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="Image/img/01.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">BE</h2>
                  <p>testtesttest</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="Image/img/02.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">MY</h2>
                  <p>testtesttest</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="Image/img/03.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">EARS</h2>
                  <p>testtesttest</p>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    )
  }
}
