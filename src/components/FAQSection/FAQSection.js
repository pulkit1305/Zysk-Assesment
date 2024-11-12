import React, { useState } from "react";
import "./FAQSection.css";
import Avatargroup from "../../assets/Avatargroup.png";
const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How does billing work?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

function FAQSection() {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndices((prevState) => {
      // If the index is already in the array, remove it (close the FAQ)
      if (prevState.includes(index)) {
        return prevState.filter((i) => i !== index);
      }
      // If the index is not in the array, add it (open the FAQ)
      return [...prevState, index];
    });
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently asked questions</h2>
      <p className="faq-subtitle">
        Everything you need to know about the product and billing.
      </p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">
                {openIndices.includes(index) ? "-" : "+"}
              </span>
            </div>
            {openIndices.includes(index) && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="contact-section">
        <img src={Avatargroup} alt="Team" className="contact-avatars" />
        <h3 className="contact-title">Still have questions?</h3>
        <p className="contact-text">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className="contact-button">Get in touch</button>
      </div>
     
    </div>
  );
}

export default FAQSection;
