import React from 'react';

const Footer = () => {
    const year = new Date();

    return (
        <footer className="footer my-5">
            <p className="text-center">&copy; { year.getFullYear() }. All Right Reserved. Design by Emmanuel Adebayo&trade;</p>
        </footer>
    );
}

export default Footer;