import Carousel from "react-bootstrap/Carousel";

const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banners/banner1.jpg"
          alt="Slide 1"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h2 style={{ fontSize: "50px" }}>Grow Joy This New Year...</h2>
          <p style={{ fontSize: "30px" }}>
            Up to 30% OFF on Plants & Gardening Kits
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banners/banner2.avif"
          alt="Slide 2"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h2 style={{ fontSize: "50px" }}>Grow With Plantify</h2>
          <p style={{ fontSize: "30px" }}>
            Indoor • Flowers • Herbal • Fruits
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banners/banner3.jpg"
          alt="Slide 3"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h2 style={{ fontSize: "50px" }}>Gardening Made Easy</h2>
          <p style={{ fontSize: "30px" }}>
            Everything you need in one place
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
