import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/main";
import Home from "./Components/home";
import Login from "./Components/login";
import SignUp from "./Components/signup";
import { AuthProvider } from "./Context/authContext";

function App() {
  return (
    <div className="App">

      <AuthProvider>

        <Router>
          <Routes>

            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

          </Routes>
        </Router>

      </AuthProvider>



    </div>
  );
}

export default App;
