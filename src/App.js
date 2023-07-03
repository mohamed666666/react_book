import './App.css';
import { Route , Routes } from 'react-router-dom';

import Home from './componants/home/home';
import BookWrapper from './componants/books_pages/booksp';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookWrapper />} />
          </Routes>
     
    </div>
  );
}

export default App;
