import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CounterApp from './components/CounterApp';
import MovieSearchApp from './components/MovieSearchApp';
import MovieDetail from './components/MovieDetail';
import TodoApp from './components/TodoApp';
import NavBar from './components/navbar';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/counter" element={<CounterApp />} />
        <Route path="/movies" element={<MovieSearchApp />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/todos" element={<TodoApp />} />
      </Routes>
    </div>
  </Router>
);

export default App;