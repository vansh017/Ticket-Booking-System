import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />

        <Routes>
        <Route path="/" element={<HomePage />} /> 


        </Routes>
        <Footer />

        
      </div>
    </Router>
  );
}

export default App;
