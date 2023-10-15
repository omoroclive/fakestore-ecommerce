import React, { useState } from 'react';

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLogin = () => {
    // Simulate a login process by checking hardcoded credentials
    if (email === 'user@example.com' && password === 'password') {
      setIsLoggedIn(true);
    }
  };

  const handleSignUp = () => {
    
    console.log('Sign-up successful:', signupEmail);
    
    setIsLoggedIn(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {isLoggedIn ? (
          <div>
            <h1 className="text-2xl font-semibold mb-4">Welcome, {email}!</h1>
            
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <button className="btn-primary mt-4" onClick={handleLogin}>
              Login
            </button>
            <hr className="my-4" />
            <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
            <input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              className="input-field"
            />
            <button className="btn-primary mt-4" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
