import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
// In your React component file
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import ParentDashboard from './pages/ParentDashboard';
import BankPayment from './pages/BankPayment';
import Children from './pages/Children';
import MyQr from './pages/MyQr';
import OnlineBank from './pages/OnlineBank';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/parent' element={<ParentDashboard/>} />
          <Route exact path='/bank-payment' element={<BankPayment/>} />
          <Route exact path='/children' element={<Children/>} />
          <Route exact path='/my-qr' element={<MyQr/>} />
          <Route exact path='/online-bank' element={<OnlineBank/>} />






        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
