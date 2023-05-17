import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="copyright-footer">
      <div>
        <p>
          &copy; {currentYear} Cezara Borsan Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
