import {Component} from 'react'
import './Form.css'

class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    error: null,
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {username, password, email} = this.state

    // Simple validation
    if (!username || !password || !email) {
      this.setState({error: 'Please fill in all fields'})
      return
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password, email}),
      })

      const result = await response.json()
      if (response.ok) {
        // Handle success (e.g., redirect or update UI)
        console.log('Registration successful:', result)
      } else {
        // Handle errors
        this.setState({error: result.message || 'Registration failed'})
      }
    } catch (error) {
      this.setState({error: 'An error occurred. Please try again.'})
    }
  }

  render() {
    const {username, email, password, error} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Register</h2>
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
          Email:
          <input
            type="email"
            name="email"
            value={email}
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
        <button type="submit">Register</button>
      </form>
    )
  }
}

export default RegistrationForm
