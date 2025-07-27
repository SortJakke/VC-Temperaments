import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Temperaments from './pages/Temperaments';

export default function App() {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/temperamentos" element={<Temperaments />} />
        <Route path="/resultado" element={<Result />} />
      </Routes>
    </div>
  )
}
