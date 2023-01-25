import './App.css';
import Home from './pages/Home';
import Single from './pages/Single';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:userId" element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
