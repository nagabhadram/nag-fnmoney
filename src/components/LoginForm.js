import {Component} from 'react'
import './Form.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    error: null,
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state

    // Simple validation
    if (!username || !password) {
      this.setState({error: 'Please fill in all fields'})
      return
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
      })

      const result = await response.json()
      if (response.ok) {
        // Handle success (e.g., redirect or update UI)
        console.log('Login successful:', result)
      } else {
        // Handle errors
        this.setState({error: result.message || 'Login failed'})
      }
    } catch (error) {
      this.setState({error: 'An error occurred. Please try again.'})
    }
  }

  render() {
    const {username, password, error} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default LoginForm
