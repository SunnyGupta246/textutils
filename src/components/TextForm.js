import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const funcallchange = (event) => {
    console.log("Change to upper case");
    setText(event.target.value);
  };
  const funcall = () => {
    console.log("Click to upper casess");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("change to Upper case", "success");
  };
  const clears = () => {
    console.log("Click to upper casess");

    setText("");
  };
  const funback = () => {
    console.log("Click to lower casess");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("change to Lowe case", "success");
  };
  // const speak = () => {
  //   let msg = new SpeechSynthesisUtterance();
  //   msg.text = text;
  //   window.speechSynthesis.speak(msg);
  // }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    msg.voice = window.speechSynthesis.getVoices()[6];
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent == "Speak") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if ((toogle.innerHTML = "Speak")) {
        window.speechSynthesis.cancel();
      }
    }
  };
  const [mystyle, setmystyle] = useState({
    color :'black',
    backgroundColor :'white'
  });
const dark=()=>{
  setmystyle({
    color : 'white',
    backgroundColor:'black'
  });
}
const bright=()=>{
  setmystyle({
    color : 'black',
    backgroundColor:'white'
  });
}
  return (
    <>
    
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>

        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          onChange={funcallchange}
      style={{color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'grey':'white'}}
          value={text}
          // style={mystyle}
          rows="8"
        ></textarea>
        <button className="btn btn-primary mx-2" onClick={funcall}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={funback}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={clears}>
          Clear
        </button>
        {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button> */}
        <button
          type="submits"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
          id="toggle"
        >
          Speak
        </button>
        
        <button className="btn btn-primary mx-2" onClick={dark}>
          Switch to dark mode
        </button>
        <button className="btn btn-primary mx-2" onClick={bright}>
          Switch to bright mode
        </button>




      </div>
      <div className="container"  
      style={{color:props.mode==='dark'?'white':'black'}}
      >
        <h1>Your text sammary</h1>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} character{" "}
        </p>
        <p>{0.08 * text.split(" ").length} minuite take to read </p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
