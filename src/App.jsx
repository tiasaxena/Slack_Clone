import './App.css';
import Navbar from './components/jsx/Navbar';
import Header from './components/jsx/Header';
import Features from './components/jsx/Features';
import Reviews from './components/jsx/Reviews';
import Details from './components/jsx/Details';
import Connect from './components/jsx/Connect';
import Footer from './components/jsx/Footer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
         <Route path="/" element={
          <>
         <Header/>
         <Features/>
         <Reviews/>
         <Details/>
         <Connect/>
         <Footer/>
         </>
        }></Route>
      </Routes>
   </Router>
    
  );
}

export default App;
