import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Messageme.css';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rj8z5l5', // Replace with your EmailJS Service ID
        'template_jys2yik', // Replace with your EmailJS Template ID
        form.current,
        'blieCywbefwiUrCca' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <div className="messageme-container">
    <div className="container">
      <div className="row header">
        <h1>CONTACT ME &nbsp;</h1>
        <h3>Fill out the form below !</h3>
      </div>
      <div className="row body">
        <form ref={form} onSubmit={sendEmail}>
          <ul>
            <li>
              <p className="left">
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" placeholder="John" required />
              </p>
              <p className="pull-right">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" placeholder="Smith" required />
              </p>
            </li>

            <li>
              <p>
                <label htmlFor="email">Email <span className="req">*</span></label>
                <input
                  type="email"
                  name="user_email" // Match this to EmailJS template placeholder
                  placeholder="john.smith@gmail.com"
                  required
                />
              </p>
            </li>
            <li><div className="divider"></div></li>
            <li>
              <label htmlFor="comments">Comments</label>
              <textarea
                cols="46"
                rows="3"
                name="message" // Match this to EmailJS template placeholder
                placeholder="Write your comments here..."
                required
              ></textarea>
            </li>

            <li>
              <input className="btn btn-submit" type="submit" value="Submit" />
            </li>
          </ul>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ContactForm;
