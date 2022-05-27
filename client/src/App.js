import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Main from './views/Main';
import Book from './views/Book';
import Author from './views/Author';
import About from './views/About';
import Contact from './views/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/books/:title' element={<Book />} />
          <Route path='/authors/:name' element={<Author />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
