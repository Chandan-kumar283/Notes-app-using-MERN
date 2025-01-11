import React,{useState} from "react";
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import NoteState from './noteState';
import UserState from './userState'
import Alert from './components/Alert';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(()=>{
      setAlert(null)
    },1500)
  };
  document.body.style.backgroundColor="rgb(161 165 169)"
  document.body.style.color="black"
 return (
    <>  
    <NoteState>
      <UserState>
     <BrowserRouter>
      <Nav   showAlert={showAlert} />
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home  showAlert={showAlert} />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login showAlert={showAlert} />}/>
        <Route path="/signup" element={<Signup  showAlert={showAlert}/>} />
      </Routes>
      </div>
    </BrowserRouter>
    </UserState>
    </NoteState>  
    </>
  )
}

export default App;
