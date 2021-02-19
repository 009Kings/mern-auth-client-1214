import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/partials/Header';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = user => {
    console.log('Handling Authentication...');
    if (user) {
      // Sick add use stuff
      setCurrentUser(user);
      setIsAuthenticated(true);
    } else {
      // Clear it all out
      setCurrentUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('jwtToken');
    }
  }

  return (
    <div className="App">
      {/* TODO Remove div, add styling more intentionally */}
      <Header currentUser={currentUser} />
      <Content 
        currentUser={currentUser}
        isAuthenticated={isAuthenticated}
        handleAuth={handleAuth}
      />
    </div>
  );
}

export default App;
