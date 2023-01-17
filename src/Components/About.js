import React from 'react'

export default function About(props) {
  let MyStyle={
    color:props.sty==='black'?'white':'black',
    backgroundColor:props.sty==='black'?'#564d4d':'white',
    border:'1px solid white',
    borderColor:props.sty==='black'?'white':'black'
  }

    
  return (
    <>
    <div className="container my-3" style={{color:props.sty==='black'?'white':'black'}}>
        <h1> About US:</h1>

        
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" style={MyStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       <h2><b>About TextR</b> </h2>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={MyStyle}><strong>TextR is a text manipulator which can be used to edit,manipulate  texts in the ways you'd like. TextR makes word counting and characters counting covenient and eficient. It is quick and easy to use.  </strong> </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" style={MyStyle}  data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <h2><b>Contact</b> </h2>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={MyStyle}><b>Contact us at:</b> <h2>Sureshsubedi485@gmail</h2></div>
    </div>
  </div>
 
</div>
      
    </div>
  
  </>
  )
}
