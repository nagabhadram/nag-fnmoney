import {Component} from 'react'
import {Route, Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import AssessmentForm from './components/AssessmentForm'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/assessment" element={<AssessmentForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
