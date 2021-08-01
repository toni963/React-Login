import React, { useEffect, useState } from 'react';
import LoginForm                      from './components/LoginForm';

function App() {
  const [user, setUser] = useState({name: "", email: ""});

  const Login = details => {
    console.log(details);
      console.log("Logged in");
      localStorage.setItem('isLoggedIn', '1');
      setUser({
        name: details.name,
        email: details.email
      });
  }

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('isLoggedIn');
      if(storedUserInfo === '1'){
        setUser({
          name: "back"
        });
      }
  }, [])

  const Logout = () => {
    localStorage.removeItem('isLoggedIn');
    setUser({ name: "", email: ""});
  }
  
  return (
    <div className="App">
      {(user.email !== '') ? (
        <div className="welcome">
          <h2>Welcome <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} />
      )}
    </div>
  );
}

export default App;