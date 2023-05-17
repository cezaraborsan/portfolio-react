import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="copyright-footer">
      <div className="container">
        <p className="text-center">
          &copy; {currentYear} Cezara Borsan Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
