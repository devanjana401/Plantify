import { useState } from "react";
import "../css/testimonial.css"; 

const Testimonial = () => {
  const [activeDot, setActiveDot] = useState(0);
  const visibleCount = 3;

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

  const move = activeDot * (100 / visibleCount);

  return (
    <section className="stories" id="review">
      <div className="container">
        <h2>Happy Plant Parents</h2>

        <div className="testimonials-wrapper">
          <div
            className="testimonials"
            style={{ transform: `translateX(-${move}%)` }}
          >
            {testimonials.map((item, index) => (
              <div className="testimonial" key={index}>
                <p className="quote" style={{ height: "100px" }}>
                  “{item.text}”
                </p>
                <div className="profile">
                  <img src={item.img} alt={item.name} />
                  <h4>{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dots">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className={`dot ${activeDot === dot ? "active" : ""}`}
              onClick={() => setActiveDot(dot)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;


