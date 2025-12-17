import React from "react";
import ContactForm from "../components/ContactForm";
import AppNavbar from "../components/AppNavbar";

const Contact = () => {
  return (
    <div className="w-full flex flex-col">
      {/* header */}
      <section className="w-full h-8 md:h-20 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl underline underline-offset-8" style={{fontWeight:'200'}}>
            Contact Us
          </h1>
        </div>
      </section>

      {/* wrapper */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* iframe */}
        <div className="w-full shadow-xl rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0367377812945!2d75.7787664748123!3d11.258707788920916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b2db706f6c3%3A0x88e33c099158e5f6!2sTECHOLAS%20TECHNOLOGIES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1762016571290!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* contactform */}
        <div className=" w-full bg-white shadow-xl rounded-xl p-6 md:p-8">
          <ContactForm />
        </div>

      </div>
    </div>
  );
};

export default Contact;
