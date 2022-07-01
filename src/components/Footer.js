import React from 'react';
import './footer.css';

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return(
        <footer><p>Logo {year}</p></footer>
    )
}

export default Footer;