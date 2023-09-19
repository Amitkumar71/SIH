import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
<div className="contact-container">
  <div className="contact-info">
    <h1>Contact Us</h1>
    <p>Fill out the form below, and we will get back to you shortly.</p>
  </div>
  <div className="contact-form">
    <form action="#" method="post">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required=""
        placeholder="Enter Your Name"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required=""
        placeholder="Enter Your Email "
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        rows={4}
        required=""
        placeholder="Message"
        defaultValue={""}
      />
      <button type="submit">Send</button>
    </form>
  </div>
</div>

    );
  }
}

export default Contact;
