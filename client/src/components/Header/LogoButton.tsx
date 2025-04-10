import Logo from '../../assets/logo.svg'
import './Header.css'

function LogoButton() {
    function goHome(){
        // send user home
        console.log("pretend you got sent home");
    }

    return (
        <button className="logo" onClick={goHome}><img src={Logo} alt="logo" /></button>
    )
} export default LogoButton