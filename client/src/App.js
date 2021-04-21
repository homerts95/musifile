
import './App.css';
import Login from './pages/Login'
import Register from "./pages/Register"
import{BrowserRouter as Router,Route} from "react-router-dom"

function App() {
  return(
    <Router>
      <Route path="/" exact render={() => <Login/>} />
      <Route path="/register" exact render={() => <Register />} />
    </Router>
  )
  
}

export default App;
