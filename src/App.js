
import './App.css';
// import Navbar from './components/Header/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login';
// import DashBoard from './components/Dashboard/Pages/DashBoard';
// import SideBar from './components/Dashboard/SideBar';
// import Main from './components/Dashboard/Main';
import { AuthContext, ContextProvider } from "./context/AuthContext";
import { useContext } from 'react';
function App() {
  const { user } = useContext(AuthContext);
  // console.log(user)
  return (
    <ContextProvider>
      <BrowserRouter>
        {/* {!user ? <SideBar /> : <Navbar />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<h1>about</h1>} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* <Route path="/dashboardHome" element={<DashBoard />} /> */}

        </Routes>
      </BrowserRouter>

    </ContextProvider>

  );
}

export default App;
