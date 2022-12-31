import React from 'react'
import "./Input.css"


function Input(props) {

  return (
    <div className={`inputContainer ${props.className}`}>
        <input 
        type={props.type}
        placeholder={props.placeholder}
        className="input"
        onChange={props.onChange}
        style={{borderColor: props.errorBorder}}
        />
        <img className="img" src={props.errorImg} alt={''} />
        <p className="errorMessage">{props.errorMessage}</p>
    </div>
  )
}

export default Input