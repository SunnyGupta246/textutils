import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import TextForm from './components/TextForm';
import NavBar from './components/NavBar';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode ,setmode]=useState('#d8d8d9');
  const [alert , setalert] = useState(null);

  const showalert =(message , type)=>{
        setalert({
          msg:message,
          type: type
        })
        setTimeout(() => {
          setalert(null);
        }, 2000);
  }
  const togglemode=()=>{
if (mode === '#d8d8d9') {
setmode ('dark');
document.body.style.backgroundColor = '#05306f';
showalert("Dark mode is enable", "success");
document.title ="Textutilis - Dark mode";
}
else
{
  setmode('#d8d8d9');
  document.body.style.backgroundColor = '#d8d8d9';
  showalert("Light mode is enable", "success");
  document.title ="Textutilis - Light mode";
}
  }
  return (
    <>
    <Router>
      <NavBar title="TextUtils" mode={mode} togglemode={togglemode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showalert={showalert}/>} />
        </Routes>
      </div>
   </Router>
   
    </>
  );
}

export default App;
