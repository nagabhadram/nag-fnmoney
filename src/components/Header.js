import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => (
  <header>
    <h1>FnMoney</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/assessment">Assessment</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
