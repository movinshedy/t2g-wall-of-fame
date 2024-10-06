import React, { useRef } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import ContactStyled from "../styled/ContactSection";
import world3 from "../../images/world3.png";

function ContactSection() {
  const form = useRef(); // Create a reference for the form

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    emailjs
      .sendForm('service_vm8b18j', 'template_15073nf', form.current, 'QHYsHBXwrT34pbbsFklv5') // Use your EmailJS credentials
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!"); // Notify user on success
        form.current.reset(); // Reset the form
      })
      .catch((error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again."); // Notify user on error
      });
  };

  return (
    <ContactStyled>
      <div className="Contact">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}> {/* Attach the sendEmail function to form submission */}
            <div className="contact-info">
              <p className="contact-title">GET IN TOUCH</p>
              <h3>Contact</h3>

              <div className="inputs">
                <p>Enter your name</p>
                <input type="text" name="name" required placeholder="Enter your name?" />
                <p>Enter your email</p>
                <input type="email" name="email" required placeholder="Enter your email?" />
                <p>Enter your message</p>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  required
                  placeholder="Enter message..."
                ></textarea>
              </div>
              <br />

              <button type="submit" className="btn btn-success">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="contact-world-map">
          <div className="world-map">
            <img src={world3} alt="" className="img-fluid rotating-earth" />
          </div>
        </div>
      </div>
    </ContactStyled>
  );
}

export default ContactSection;
