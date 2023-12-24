//import { useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

function App() {

//  const navigate = useNavigate();

  return (
    // <div className="App">
      
    //   <header className="App-header">
    //     <h1>Welcome TeasyPay</h1>
    //     <button className='users-button' onClick={() => navigate('/users')}>Users</button>
    //   </header>
      
    // </div>

    <div>
      <Dashboard />
      <Login />
      <Register />
    </div>
  );
}

export default App;
