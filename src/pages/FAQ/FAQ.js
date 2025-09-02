import { useState } from "react";
import "./Css/FAQ.css";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I verify my email?",
      answer: `Click the link in the verification email from verify@codepen.io
        (be sure to check your spam folder or other email tabs if it's not in your inbox). 
        Or, send an email with the subject "Verify" to verify@codepen.io 
        from the email address you use for your CodePen account.`,
    },
    {
      question: "My Pen loads infinitely or crashes the browser.",
      answer: `It's likely an infinite loop in JavaScript that we could not catch. 
        To fix, add ?turn_off_js=true to the end of the URL (on any page, like the Pen or Project editor, 
        your Profile page, or the Dashboard) to temporarily turn off JavaScript. 
        When you're ready to run the JavaScript again, remove ?turn_off_js=true and refresh the page.`,
    },
    {
      question: "How do I contact the creator of a Pen?",
      answer: `You can leave a comment on any public Pen. 
        Click the "Comments" link in the Pen editor view, or visit the Details page.`,
    },
    {
      question: "What version of [library] does CodePen use?",
      answer: `We have our current list of library versions.`,
    },
    {
      question: "What are forks?",
      answer: `A fork is a complete copy of a Pen or Project that you can save 
        to your own account and modify. Your forked copy comes with everything the original author wrote, 
        including all of the code and any dependencies.`,
    },
  ];

  return (
    <div>
      <div className="fgyfgfd5215g">
        <div className="container">
          <div
            className="aboutusbannr55"
            style={{
              backgroundImage: "url('./images/Fre.png')",
              backgroundSize: "100% 100%",
              height: "450px",
            }}
          >
            <div className="dfgnhdfjhgdf">
              <div className="row">
                <div className="col-lg-7"></div>
                <div className="col-lg-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="fjgnfg55d">
        <div className="wrapper">
          <div className="container">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <div
                  className={`question ${activeIndex === index ? "active" : ""}`}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </div>
                {activeIndex === index && (
                  <div className="answercont" style={{ maxHeight: "92px" }}>
                    <div className="answer">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
