import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] =useState("enter the text here");

    const handleUpClick=()=>{
        console.log("Upper case was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }
   
    const handleLower =()=>{
      console.log("Upper case was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText);
  }

  const handleClear =()=>{
    console.log("Upper case was clicked" + text);
    let newText="";
    setText(newText);
}
    const handleOnChange=(event)=>{
        console.log("OnChange was clicked ");
        setText(event.target.value);
    }
  return (
    <>
    <div className='container'>
      
<div className="mb-3">
  <label for="mybox" className="form-label">{props.heading}</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To upper case</button>
<button className="btn btn-primary mx-3" onClick={handleLower}>Convert To lower case</button>
<button className="btn btn-primary" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-3">
     <h1> Your Text Summery</h1>
     <p> {text.split(" ").length} word and  {text.length} character</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <p>Preview</p>
       <p>{text}</p>
    </div>
    </>
  )
}
