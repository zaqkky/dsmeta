import logo from "../../assets/img/logo.svg";

import "./styles.css";
function Header() {
    return (
        <header >
            <div className="Dsmeta-logo-container">
                <img src={logo} alt="Dsmeta"/>
                    <h1>Dsmeta</h1>
                    <p>Desenvolvido por<a href="https://www.instagram.com/zaukk_s/">@zaukk_s</a></p>
            </div>
    </header >
    )
}

export default Header;
