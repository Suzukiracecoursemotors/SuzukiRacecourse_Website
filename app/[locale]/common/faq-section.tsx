interface FAQItem {
  question: string;
  answer: string;
}
interface FAQSectionProps {
  title: string;
  questions: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ questions, title }) => {
  const ACC_ID =
    "accordion-" + (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);

  return (
    <section className="py-15 py-xl-20 bg-black inverted">
      <div className="container">
        <div className="row align-items-end mb-5">
          <div className="col-lg-8 mb-2 mb-lg-0">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="row mb-8">
          <div className="col-12">
            <div
              className="accordion accordion-highlight border-top border-bottom"
              id={ACC_ID}
            >
              {questions.map((faq, index) => (
                <div key={`${ACC_ID}-${index}`} className="accordion-item">
                  <h2
                    className="accordion-header"
                    id={`${ACC_ID}-heading-${index}`}
                  >
                    <button
                      className="accordion-button collapsed text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${ACC_ID}-collapse-${index}`}
                      aria-expanded="false"
                      aria-controls={`${ACC_ID}-collapse-${index}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`${ACC_ID}-collapse-${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`${ACC_ID}-heading-${index}`}
                    data-bs-parent={`#${ACC_ID}`}
                  >
                    <div className="accordion-body">
                      <p className="text-secondary">{faq.answer}</p>
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
};

export default FAQSection;
