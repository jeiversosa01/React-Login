import { useAuth0 } from '@auth0/auth0-react';

import { LoginButton } from './Login';
import logo from './logo.svg';
import { Profile } from './Profile';
import { LogoutButton } from './Logout';
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { isAuthenticated ? <>
          <Profile />
          <LogoutButton />
        </>
        : <LoginButton />}                
      </header>
    </div>
  );
}

export default App;
