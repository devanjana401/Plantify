import React, { useState, useEffect } from "react";

const TopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-25 right-10 bg-gray-500 text-white text-xl p-4 shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
        style={{borderRadius:"200px",height:"10px",width:"10px"}}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    )
  );
};

export default TopButton;
