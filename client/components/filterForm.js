import React, {Component} from 'react'

class filterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textFilter: ''
    }
  }

  handleChange = event => {
    this.setState({
      textFilter: event.target.value
    })
    this.props.onChange(event.target.value)
  }
  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by text: </label>
        <input
          type="text"
          id="filter"
          value={this.state.textFilter}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default filterForm
