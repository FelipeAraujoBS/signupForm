import React, { useState } from 'react'
import Input from "../Input/Input"
import Card from '../Card/Card'
import error from "../img/icon-error.svg"

import "./Form.css"

const initialData = {firstName: "", secondName: "", email: "", password: ""}

function Form(props) {
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formData, setFormData] = useState(initialData)
  const [errorsValue, setErrorsValue] = useState({})
 

  

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      firstName: firstName,
      secondName: secondName,
      email: email,
      password: password
    }

    const validate = (values) => {
      const errors = {}
  
      if(values.firstName === ""){
        errors.firstName = "First Name cannot be ampty"
      }
      if(values.secondName === ""){
        errors.secondName = "Second Name cannot be ampty"
      }
    if(values.email ===  ""){
        errors.email = "Email cannot be ampty"
      }
    if(values.password === ""){
        errors.password = "Password cannot be ampty"
      }
    if(values.firstName === "" && values.secondName === "" && values.email === "" && values.password === ""){
      errors.img = error
    }
    if(values.firstName === "" && values.secondName === "" && values.email === "" && values.password === ""){
      errors.border = "red"
    }
      return errors
    } 

    setFormData(data)
    setErrorsValue(validate(formData))
  }

  console.log(formData)
  console.log(errorsValue)


  return (
    <Card>
        <form onSubmit={handleSubmit} className={`form ${props.className}`}>
            <Input errorBorder={errorsValue.border} errorMessage={errorsValue.firstName} errorImg={errorsValue.img} type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
            <Input errorBorder={errorsValue.border} errorMessage={errorsValue.secondName} errorImg={errorsValue.img} type="text" placeholder="Second Name" onChange={(e) => setSecondName(e.target.value)}/>
            <Input errorBorder={errorsValue.border} errorMessage={errorsValue.email} errorImg={errorsValue.img} type="mail" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <Input errorBorder={errorsValue.border} errorMessage={errorsValue.password} errorImg={errorsValue.img} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <div className='btnContainer'>
              <button className='btn'>CLAIM YOUR FREE TRIAL</button>
              <p className='btnP'>By clicking the button, you are agreeing to our <span style={{color: "hsl(0, 100%, 74%)"}}>Terms and Services</span></p>
            </div>
        </form>
    </Card>
  )
}

export default Form