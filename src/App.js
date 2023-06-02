import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

import { Route, BrowserRouter as Router,Routes} from 'react-router-dom';
function App() {
  const location = window.location.pathname;  
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sobre' element={<Sobre/>}/>
      </Routes>
    </Router>
  );
}

export default App;
