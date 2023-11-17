import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Header } from './header/Header';
import  Main  from './main/main';
import { Footer } from './footer/Footer';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;