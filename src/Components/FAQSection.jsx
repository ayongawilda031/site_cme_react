import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqItems = [
    {
      question: "Quels sont les domaines de droit dans lesquels vous intervenez ?",
      answer: "Notre cabinet intervient dans tous les domaines du droit : droit des affaires, droit civil, droit pénal, droit immobilier, droit de la famille, et bien d'autres."
    },
    {
      question: "Comment prendre rendez-vous avec un avocat ?",
      answer: "Vous pouvez nous contacter par téléphone, email ou via le formulaire de contact sur notre site. Nous vous répondrons dans les plus brefs délais."
    },
    {
      question: "Quels sont vos honoraires ?",
      answer: "Nos honoraires varient selon la complexité du dossier et le temps nécessaire. Nous proposons une première consultation gratuite pour évaluer votre situation."
    },

  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section bg-white">
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-md-8 col-xl-5 text-center mx-auto">
            <h3 className="display-6 fw-bold">Foire aux questions</h3>
            <p>Retrouvez les réponses aux questions les plus fréquentes.</p>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-10 col-lg-8 mx-auto">
            <div className="accordion" id="faqAccordion">
              {faqItems.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleFAQ(index)}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p className="mb-0">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}