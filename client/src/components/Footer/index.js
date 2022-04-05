import React from "react";
// import KHLogo from "../../assets/KH-LOGO-sm.png"

function Footer() {
return (
  <div>
    <footer className="text-white fixed-bottom bg-dark">
      <div className="row px-2 pt-3 row text-center">
        <p className="col-lg-4 col-sm-12 p-2">© 2022 Copyright</p>
        <div className="col-lg-2 d-none d-sm-block"></div>
        <div className="col-lg-2 d-none d-sm-block"></div>
        <p className="col-lg-4 col-sm-12 p-2">Website built by:
          {/* <a className="text-decoration-none p-2" href="https://github.com/konnerhartman">
            <img height="18rem" src={KHLogo} alt="Konner Hartman Logo" />
          </a> */}
        </p>
      </div>
      <div className="">
        
      </div>
    </footer>
  </div>
  
)
};

export default Footer;