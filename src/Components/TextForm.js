import React,{useState} from 'react';

export default function TextForm(props){

    const [textt,setText]=useState("");
    const [bld,setbld]=useState('normal')
    const UpCase=()=>{
        //console.log("Button clickeed");
        let newText=textt.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase","Success!");
    }
    const LoCase=()=>{
      let newText=textt.toLowerCase()
        setText(newText);
        props.showAlert("Converted to LowerCase","Success!");
    }
    const changE=(event)=>{
        setText(event.target.value);
        
    }
    const ClrText=()=>{
     setText("");
     props.showAlert("Text Cleared","Success!");
    }    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = textt;
        window.speechSynthesis.speak(msg);
      }
      const handleCopy=()=>{
       
        navigator.clipboard.writeText(textt);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text Copied","Success!");
      }
      const handleExtraSpaces=()=>{
        let newText=textt.split(/[ ]+/);
      
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","Success!");
      }
      const Bld=()=>{
       setbld(bld==='normal'?'bold':'normal');
        
      }
     
     
       
    return(
        
    <div className="container">
    <div className="mb-3" style={{color:props.mode==='black'?'white':'black'}}>
        <h1>{props.heading}</h1>
    
    <textarea className="form-control" id="myBox" rows="9" value={textt} onChange={changE} style={{backgroundColor:props.mode==='black'?'#564d4d':'white',color:props.mode==='black'?'white':'black',fontWeight:bld}}></textarea>
    
  </div>
  
  <button className="btn btn-primary" disabled={textt.length===0} onClick={UpCase} >Convert To Uppercase</button>
  <button className="btn btn-primary my-2 mx-2" disabled={textt.length===0} onClick={LoCase} >Convert To Lowercase</button>
  <button className="btn btn-primary my-2  mx-2" disabled={textt.length===0} onClick={ClrText} >Clear Text</button>
  <button className="btn btn-primary  my-2 mx-2" disabled={textt.length===0} onClick={speak} >Speak</button>
  <button className="btn btn-primary my-2 mx-2" disabled={textt.length===0} onClick={handleCopy} >Copy Text</button>
  <button className="btn btn-primary my-2 mx-2" disabled={textt.length===0} onClick={handleExtraSpaces} >Remove Extra Spaces Text</button>
 
  <button className="btn btn-primary my-2  mx-2" disabled={textt.length===0} onClick={Bld} >Bold</button>
  
  <div className=" cointainer my-3" style={{color:props.mode==='black'?'white':'black'}}>
    <h1>Your text Summary</h1>
    <b>{textt.split(/\s+/).filter((element)=>{return element.length!==0}).length} words  {textt.length} characters 
    Takes {0.008*textt.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read
    </b>
    <h2>Preview</h2>
    {textt.length>0?textt:"Enter text in the box above to review"}
  </div>
  </div>

)

}
