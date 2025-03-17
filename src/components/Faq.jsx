import React, { useState } from "react";
const faqData = [
  {
    question: "What are the key features of our tech solutions?",
    answer:
      "Our solutions are designed with cutting-edge technology, ensuring seamless integration, high performance, and scalability. We focus on innovation, security, and user-friendly experiences.",
  },
  {
    question: "How do we guarantee the best quality in our products?",
    answer:
      "Quality is our top priority. We follow industry best practices, conduct rigorous testing, and ensure continuous improvements through updates and feedback-driven development.",
  },
  {
    question: "What makes our tech services unique?",
    answer:
      "We offer tailor-made solutions, leveraging AI, cloud computing, and automation. Our approach ensures efficiency, customization, and future-ready technology for your business.",
  },
  {
    question: "Can we customize our software solutions?",
    answer:
      "Absolutely! We provide highly customizable software solutions to meet your specific business needs, ensuring flexibility and scalability as your company grows.",
  },
  {
    question: "Do you offer 24/7 customer support?",
    answer:
      "Yes! Our dedicated support team is available 24/7 to assist you with any technical issues, troubleshooting, or queries. We ensure uninterrupted service and quick resolutions to keep your business running smoothly.",
  },
];


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section id="faq-2" className="faq-2 section light-background">
        {/* Section Title */}
        <div className="container section-title" >
          <h2>Frequently Asked Questions</h2>
          <p className="text-secondary">
            Explore our frequently asked questions to find answers to common
            queries about our IT solutions and services.
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="faq-container">
                {faqData.map((faq, index) => (
                  <div
                    className={`faq-item ${
                      openIndex === index ? "faq-active" : ""
                    }`}
                  
                    key={index}
                    data-aos-delay={200}
                  >
                    <i className="faq-icon bi bi-question-circle" />
                    <h3
                      onClick={() => toggleFaq(index)}
                      style={{ cursor: "pointer" }}
                      
                    >
                      {" "}
                      {faq.question}
                    </h3>
                    {openIndex === index && (
                    <div className="faq-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                ))}

                {/* End Faq item*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
