import logo from './logo.svg';
import './App.css';
import Quiz from './quizs/quiz';
import { questions } from './quizs/questions';

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './homepage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Quiz data={questions} />} />
      </Routes>
    </Router>
  );
}


export default App;
