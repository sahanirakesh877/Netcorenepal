import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const testimonials = [
  {
    name: "Mansi ",
    role: "Bussiness Manager",
    image: "/assets/img/person/person-f-5.webp",
    review:
      "Their design solutions are innovative and impactful. My clients have been thrilled with the results. It’s been a pleasure collaborating with them!",
  },
  {
    name: "Rakesh Nishad",
    role: "CEO & Founder",
    image: "/assets/img/testimonial4.jpeg",
    review:
      "Working with this team has been a game-changer for us. Their expertise and creativity exceeded our expectations. We're now reaching new heights thanks to their dedication!",
  },
  
  {
    name: "Subham Shrestha",
    role: "Store Owner",
    image: "/assets/img/testimonial1.jpg",
    review:
      "Their service has greatly boosted my sales and made my business thrive. I highly recommend their expertise to anyone looking to grow their business.",
  },
  {
    name: "Prof. John",
    role: "Principal",
    image: "/assets/img/testimonial3.jpg",
    review:
      "Collaborating with this team was a fantastic experience. They helped me transform my freelancing career into a brand. I feel more confident and motivated than ever!",
  },
  {
    name: "Sarah Patel",
    role: "Marketing Director",
    image: "/assets/img/testimonil2.jpg",
    review:
      "Their creative strategies have helped us reach a broader audience and strengthen our brand's presence. It's been an incredible journey working with such a talented team!",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="slide"
          speed={800}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <img
                  src={testimonial.image}
                  className="testimonial-img"
                  alt={testimonial.name}
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.role}</h4>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill" />
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  <span>{testimonial.review}</span>
                  <i className="bi bi-quote quote-icon-right" />
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
