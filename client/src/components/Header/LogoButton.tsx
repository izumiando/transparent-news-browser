import React from 'react'
import Logo from '../../assets/logo.svg'
import 'Header.css'

function LogoButton() {
    return (
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
    )
} export default LogoButton