import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  // handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validation
  const validate = () => {
    let newErrors = {};
    const namePattern = /^[a-zA-Z\s'-]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!formData.name.trim() || !namePattern.test(formData.name))
      newErrors.name = "Enter a valid name (letters only)!";

    if (!formData.email.trim() || !emailPattern.test(formData.email))
      newErrors.email = "Enter a valid email!";

    if (!phonePattern.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits!";

    if (!formData.message.trim())
      newErrors.message = "Message is required!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    emailjs
      .send(
        "service_uye8cf2",        // your service ID
        "template_jitw5wm",       // your template ID
        formData,
        "rfuFFYZhu0_J3KVCq"       // your public key
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message: " + JSON.stringify(error));
      });
  };

  return (
    <div className="contact-container">

      <h2 style={{ color: "rgb(53, 53, 158)" }}>Get In Touch….</h2>
      <p>
        or reach out to
        <a href="https://wa.me/917034165867" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp" style={{ color: "green", marginLeft: "5px" }}></i>
        </a>{" "}
        /
        <a
          href="mailto:yoginyogainfo@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "rgb(53, 53, 158)", marginLeft: "5px" }}
        >
          <i className="fa fa-envelope"></i> yoginyogainfo@gmail.com
        </a>
      </p>

      <form onSubmit={handleSubmit} className="contact-form-react">

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <span className="error">{errors.name}</span>

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="error">{errors.email}</span>

        <label>Phone Number</label>
        <input
          type="number"
          name="phone"
          placeholder="Enter Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <span className="error">{errors.phone}</span>

        <label>Message</label>
        <textarea
          name="message"
          placeholder="For More Details Enter Your Message To Us Here..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <span className="error">{errors.message}</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
