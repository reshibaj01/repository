import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Split from './components/split';
import DemoPage from './pages/demo_page';





const App = () => {
  return (
    
    <div>
      <BrowserRouter>
     <Routes>
      <Route path="/demo" element={<DemoPage/>} />
      {/* <Route path="/example" element={<Header/>} />
      <Route path="/split" element={<Split/>} /> */}
     </Routes>
     </BrowserRouter>
      
        


</div>
  );
}

export default App
