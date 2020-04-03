import React from "react";
import { Link } from "gatsby";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";
import { MdPhone } from "react-icons/md";

export default (props) => (
  <footer>
    <div className="preFooter container">
      <h5>Got a design project? Great, I'm available </h5>
      <form
        className="form"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="" id="" placeholder="Name" />
        <input type="tel" name="" id="" placeholder="Mobile" />
        <button type="submit">Send</button>
      </form>
    </div>
    <div className="postFooter container">
      {props.global.mobile != "" ? (
        <a href={`tel:${props.global.mobile}`}>
          <MdPhone color="white" />
        </a>
      ) : null}
      {props.global.facebook != "" ? (
        <a href={`https://facebook.com/${props.global.facebook}`}>
          <FaFacebookF color="white" />
        </a>
      ) : null}
      {props.global.instagram != "" ? (
        <a href={`https://instagram.com/${props.global.instagram}`}>
          <FaInstagram color="white" />
        </a>
      ) : null}
      {props.global.behance != "" ? (
        <a href={`https://behance.net/${props.global.behance}`}>
          <FaBehance color="white" />
        </a>
      ) : null}
      {props.global.mail != "" ? (
        <a href={`mailto:${props.global.mail}`}>
          <FaEnvelope color="white" />
        </a>
      ) : null}
    </div>
    <div className="credit">
      <div className="container">
        <h1>{props.global.name}</h1>
        <h5>{props.quote}</h5>
        <p>
          Handcrafted by &copy;
          <a href="https://codewithsagar.com" title="codewithsagar.com">
            {" "}
            CodeWithSagar
          </a>
        </p>
      </div>
    </div>
  </footer>
);
