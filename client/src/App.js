import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/book/:roomid' exact Component={<BookingScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
