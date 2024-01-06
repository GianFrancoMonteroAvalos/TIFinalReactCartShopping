import React, { useState } from 'react'
import {LoginContext} from './LoginContext'
export const LoginProvider = ({children}) => {
    const initValues={
        user: 'Gian Franco Montero Avalos',
        email:'gianmonteroavalos@gmail.com',
        pass:'1234',
        validado:false
    }
    const [login,setLogin]=useState(initValues)
    const [valido,setValido]=useState(false)
    const actualizarLogin=(value)=>{
      setValido(value)
    }
  return (
    <LoginContext.Provider value={{login,actualizarLogin,valido}}>
        {children}
    </LoginContext.Provider>
  )
}
