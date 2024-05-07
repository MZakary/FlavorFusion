import React, { useState } from "react";
import Map from '../Modules/Map/Map'
import axios from "axios";
import { Circles } from 'react-loader-spinner';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    inquiry: "",
  });
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "phoneNumber") {
      // Remove any non-digit characters
      const digitsOnly = value.replace(/\D/g, "");
  
      // Format the phone number with parentheses and dashes
      const formattedPhoneNumber = `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
  
      setFormData({
        ...formData,
        [name]: formattedPhoneNumber,
      });
    } else {
      // For other input fields, update the value as usual
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="contact-page">

      <section className="Contact">
        <div className="Image">
          <img src="/Img/contact.png" alt="" />
        </div>
        <form className="Form" action="https://formsubmit.co/mitroviczakary@gmail.com" method="POST">
          <h2>Contact Us <span>Today</span>!</h2>
          <div className="input-group">
            <span className="input-group-text">First and last name</span>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} aria-label="First name" className="form-control" placeholder="John"/>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} aria-label="Last name" className="form-control" placeholder="Doe" />
          </div>
          <div className="input-group">
            <span className="input-group-text">Email</span>
            <input type="text" name="email" value={formData.email} onChange={handleChange} aria-label="Email" className="form-control" placeholder="example@mail.com"/>
          </div>
          <div className="input-group">
            <span className="input-group-text">Phone number</span>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} aria-label="Phone number" className="form-control" placeholder="(123) 456-7890"/>
          </div>
          <div className="Inquiry">
            <span className="input-group-text">Inquiry for us</span>
            <textarea name="inquiry" value={formData.inquiry} onChange={handleChange} className="form-control" aria-label="Inquiry" placeholder="Your inquiry here"></textarea>
          </div>
          {isSending ? (<button type="submit" className="btn SubmitButton"><div className="LoadingSpinner">
                    <Circles height="80" width="80" color="#1F1F1F" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="loading" visible={true} />
                </div></button>) : (<button type="submit" onClick={() => setIsSending(true)} className="btn SubmitButton">Send email</button>)}
          
        </form>
      </section>
    </div>
  );
}

export default Contact;
