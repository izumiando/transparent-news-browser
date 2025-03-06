import Logo from '../../assets/logo.svg'
import './Header.css'

function LogoButton(logoClick: any) {
    return (
        <button className="logo" onClick={logoClick}><img src={Logo} alt="logo" /></button>
    )
} export default LogoButton