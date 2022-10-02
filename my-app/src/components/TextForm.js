import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] =useState("enter the text here");

    const handleUpClick=()=>{
        console.log("Upper case was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("OnChange was clicked ");
        setText(event.target.value);
    }
  return (
    <div>
      
<div className="mb-3">
  <label for="mybox" className="form-label">{props.heading}</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert To upper case</button>
    </div>
  )
}
