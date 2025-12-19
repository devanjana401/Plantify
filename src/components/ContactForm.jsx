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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs
      .send(
        "service_uye8cf2",
        "template_79h7trl",
        formData,
        "rfuFFYZhu0_J3KVCq"
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
    <div className="w-full">

      {/* header */}
      <h2 className="text-2xl font-bold text-blue-700 mb-2">
        Get In Touch…
      </h2>

      <p className="text-gray-700 mb-6">
        or reach out to{" "}
        <a 
          href="https://wa.me/917034165867" 
          target="_blank" 
          rel="noreferrer"
          className="text-green-600 font-semibold ml-1"
        >
          WhatsApp
        </a>{" "}
        / 
        <a
          href="mailto:plantifyinfo@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 font-semibold ml-1"
        >
          plantifyinfo@gmail.com
        </a>
      </p>

      {/* form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* name input */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.name && (
            <span className="text-red-600 text-sm mt-1">{errors.name}</span>
          )}
        </div>

        {/* email input */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.email && (
            <span className="text-red-600 text-sm mt-1">{errors.email}</span>
          )}
        </div>

        {/* phone input */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.phone && (
            <span className="text-red-600 text-sm mt-1">{errors.phone}</span>
          )}
        </div>

        {/* message textarea */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Message</label>
          <textarea
            name="message"
            placeholder="For More Details Enter Your Message To Us Here..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="px-4 py-3 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          ></textarea>
          {errors.message && (
            <span className="text-red-600 text-sm mt-1">{errors.message}</span>
          )}
        </div>

        {/* submit button */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg 
                     hover:bg-blue-500 transition shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
