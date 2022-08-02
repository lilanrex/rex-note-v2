import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();
    return ( 
    <footer className="footer">
                <p className="footer p">Copyright ⓒ {currentYear} </p>
                <p className="footer p">Lanrex</p>
     </footer>
    );

}

export default Footer;