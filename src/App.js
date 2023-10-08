import { Route, Routes } from 'react-router-dom';
import './App.css';

// trai cay
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/slicknav.min.css';
import './css/style.css';

// import './js/jquery-3.3.1.min.js';
// import './js/bootstrap.min.js';
// import './js/jquery.nice-select.min.js';
// import './js/jquery.slicknav.js';
// import './js/mixitup.min.js';
// import './js/owl.carousel.min.js';
// import './js/main.js';

import Layout from './pages/layout';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Layout/>}/>
    </Routes>
    
  </>
  
  );
  
}

export default App;