// WhatsappButton.jsx
import React from "react";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/917034165867"
      target="_blank"
      style={{textDecoration:"none"}}
      className="fixed bottom-10 right-10 bg-green-500 text-white size-8 p-4 rounded-full shadow-lg flex items-center justify-center hover:scale-80 transition-transform z-50 "
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsappButton;
