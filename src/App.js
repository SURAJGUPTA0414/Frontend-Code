import './App.css';
import OTPVerificationPage from './pages/OTPVerificationPage.jsx';
import Landingpage from './pages/Landingpage.jsx';
import ProductList from './pages/ProductList.jsx';
import {BrowserRouter as Router} from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
      <Router>
     <Landingpage />
     {/* <ProductList /> */}
     {/* <OTPVerificationPage/> */}
     </Router>
    </div>
  );
};

export default App;