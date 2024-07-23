import {Component} from 'react'
import './Form.css'

class AssessmentForm extends Component {
  state = {
    task: '',
    description: '',
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    // Process assessment task submission
  }

  render() {
    const {task, description} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Submit Assessment</h2>
        <label>
          Task:
          <input
            type="text"
            name="task"
            value={task}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={description}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit Task</button>
      </form>
    )
  }
}

export default AssessmentForm
