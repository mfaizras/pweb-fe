import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const Layouts = ({ children }) => {
  return (
    <React.Fragment>
      <NavbarComponent/>
      <div className="">
        <main>{children}</main>
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default Layouts;
