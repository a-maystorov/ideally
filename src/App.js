// import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// styles
import './App.css';

// pages & components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <div className="container">
          {user && <Sidebar />}
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/create"
              element={user ? <Create /> : <Navigate to="/login" />}
            />
            <Route
              path="/projects/:id"
              element={user ? <Project /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
          {user && <OnlineUsers />}
        </div>
      )}
    </div>
  );
}

export default App;
