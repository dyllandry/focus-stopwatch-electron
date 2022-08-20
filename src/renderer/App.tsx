import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FocusStopwatch from './FocusStopwatch';

const Hello = () => {
  return <FocusStopwatch />;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
