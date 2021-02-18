import './App.css';
import Content from './components/Content';
import Header from './components/partials/Header';

function App() {
  return (
    <div className="App">
      {/* TODO Remove div, add styling more intentionally */}
      <Header />
      <Content />
    </div>
  );
}

export default App;
