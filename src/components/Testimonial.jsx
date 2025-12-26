import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "../css/testimonial.css";

const Testimonial = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const testimonials = [
    {
      text: "The plants arrived fresh, healthy, and well-packed. My home garden looks more lively than ever!",
      img: "/testimonial/review1.png",
      name: "Reviewer 1",
    },
    {
      text: "Excellent quality indoor plants. Even as a beginner, I found them easy to care for.",
      img: "/testimonial/review2.png",
      name: "Reviewer 2",
    },
    {
      text: "I loved the variety of plants available. The herbal plants are growing beautifully.",
      img: "/testimonial/review3.jpeg",
      name: "Reviewer 3",
    },
    {
      text: "Fast delivery and eco-friendly packaging. The plants were fresh and soil quality was great.",
      img: "/testimonial/review4.png",
      name: "Reviewer 4",
    },
    {
      text: "My balcony garden is now full of greenery. The plants are healthy and well-maintained.",
      img: "/testimonial/review5.png",
      name: "Reviewer 5",
    },
  ];

  /* detect screen size for dot moving */
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth <= 600) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 992) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const move = activeDot * (100 / visibleCount);

  return (
    <section className="stories" id="review">
      <div className="container">
        <h2 style={{textDecoration:"underline",textUnderlineOffset:"6px"}}>Happy Plant Parents</h2>

        <div className="testimonials-wrapper">
          <div
            className="testimonials"
            style={{ transform: `translateX(-${move}%)` }}
          >
            {testimonials.map((item, index) => (
              <Card className="testimonial" key={index}>
                <Card.Body>
                  <p className="quote">“{item.text}”</p>
                  <div className="profile">
                    <img src={item.img} alt={item.name} />
                    <h4>{item.name}</h4>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        {/* dots making responsive */}
        <div className="dots">
          {Array.from(
            { length: Math.ceil(testimonials.length / visibleCount) },
            (_, i) => (
              <span
                key={i}              //track which dot changes
                className={`dot ${activeDot === i ? "active" : ""}`}
                onClick={() => setActiveDot(i)}
              ></span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
