import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      {/* Cards */}
      <Cards/>
      {/* Buttons */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
