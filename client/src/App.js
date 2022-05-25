import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Main from './views/Main';
import Book from './views/Book';
import Author from './views/Author';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/books/:title' element={<Book />} />
          <Route path='/authors/:name' element={<Author />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
