import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="contact-page">

      <section className="bg-section">
        <img src="/assets/images/about/mainabout.jpg" alt="" />
      </section>

      <div className="contact-wrapper">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0367377812945!2d75.7787664748123!3d11.258707788920916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b2db706f6c3%3A0x88e33c099158e5f6!2sTECHOLAS%20TECHNOLOGIES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1762016571290!5m2!1sen!2sin"
          width="800"
          height="750"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <ContactForm />
      </div>

    </div>
  );
};

export default Contact;
