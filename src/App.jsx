import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Features from './Features';
import Profiles from './Profiles';
import Communities from './Communities';
import Connect from './Connect';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="communities" element={<Communities />} />
          <Route path="connect" element={<Connect />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
