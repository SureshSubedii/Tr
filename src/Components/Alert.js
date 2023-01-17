import React from 'react'

export default function  Alert(props) {
  return (
    <div style={{height:'50px'}}>{props.alrt.msg &&

     <div className="alert alert-success alert-dismissible fade show" role="alert">
    <strong>{props.alrt.type}</strong> {props.alrt.msg}

  </div>}
  </div>
 
  )
}

