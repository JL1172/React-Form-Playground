import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
 
      <BrowserRouter>
        <div>
          <Home />
        </div>
      </BrowserRouter>
 
  );
}

export default App;
