import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import Buttons from "./Buttons";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_108gkyx",
        "template_lazcxdl",
        form.current,
        "bjZAHIYIHCIOLrUEu"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMessage.innerHTML = "<p className='success'>Message envoyé</p>";
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMessage.innerHTML =
            "<p className='error'>Veuillez re essayez</p>";
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contctez nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" required autoComplete="off" id="mess" />
        <input type="submit" value="Send" className="hover button" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default ContactForm;
