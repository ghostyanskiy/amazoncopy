import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./Sign.css";

export default function Sign() {
  return (
    <div className="sign">
      <div className="sign-box">
        <h2>Sign in</h2>
        <h4>Email or mobile phone number</h4>
        <input type="text" />
        <button>Continue</button>
        <p>
          By continuing, you agree to Amazon's{" "}
          <a className="text-color" href="#">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a className="text-color" href="#">
            Privacy Notice
          </a>
          .
        </p>
        <div className="sign-help dropdown" style={{ float: "left" }}>
          <FontAwesomeIcon icon={faCaretRight} />
          <span className="text-color text-help dropbtn">Need help?</span>
          <div class="dropdown-content" style={{ left: 0 }}>
            <a className="text-color" href="#">
              Forgot your password?
            </a>
            <a className="text-color" href="#">
              Other issues with Sign-In
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr />
        <div className="sign-deal">
          <p>Buying for work?</p>
          <a className="text-color" href="#">
            Shop on Amazon Business
          </a>
        </div>
      </div>
      <div className="reg-qa">
        <span>New to Amazon?</span>
      </div>
      <button className="register-ask">Create your Amazon account</button>
    </div>
  );
}
