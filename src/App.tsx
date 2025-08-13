import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Temperaments from './pages/Temperaments';

export default function App() {

  return (
    <div className="h-screen md:h-auto bg-gray-200 text-gray-800">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Quiz />} />
        <Route path="/temperamentos" element={<Temperaments />} />
        <Route path="/resultado" element={<Result />} />
      </Routes>
    </div>
  )
}
