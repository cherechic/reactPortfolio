import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>
          <Fade bottom cascade>
            {" "}
            Contact.
          </Fade>
        </h1>
        <Fade bottom>
          <div className="contact-content">
            <h1>
              I am ready to build with you<br></br>
              <span className="amazing-color">Cherechic@hotmail.com</span>
            </h1>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Contact;
