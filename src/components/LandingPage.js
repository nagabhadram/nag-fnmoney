import {Component} from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <h1>Welcome to FnMoney</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/assessment">Assessment Tasks</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default LandingPage
