import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import Authors from "./pages/authors/Authors";
import Book from "./pages/book/Book";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Register from "./pages/forms/Register";
import Login from "./pages/forms/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/authors' element={<Authors />} />
        <Route path='/book/:id' element={<Book />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
