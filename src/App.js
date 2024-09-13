import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventDetails from "./pages/EventDetails";
import SelectLocation from "./pages/SelectLocation";
import BookTicket from "./components/BookTicket";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/card/:id" element={<EventDetails />} />
          <Route path="book-ticket/:id" element={<BookTicket />}>
            <Route path="select-location" element={<SelectLocation />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
