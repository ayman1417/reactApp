import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import Window from "./Components/Window/Window";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes >
          <Route path="/" Component={Home}></Route>
          <Route path="/Portfolio" Component={Portfolio}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes >
        <Footer></Footer>
      </Router>

{/* <Window></Window> */}
      {/* <Home></Home> */}
      {/* <About></About> */}
      {/* <Contact></Contact> */}
      {/* <Portfolio></Portfolio> */}
    </>
  );
}

export default App;
