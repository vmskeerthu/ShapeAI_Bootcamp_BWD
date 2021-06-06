import React from "react-dom";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {currYear}</p>
    </footer>
  );
}

export default Footer;
