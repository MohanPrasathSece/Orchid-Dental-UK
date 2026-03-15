import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import FadeInView from "@/components/FadeInView";

const homePageFaqs = [
  {
    q: "What should I expect at my first visit?",
    a: "Your first visit includes a comprehensive exam, digital X-rays, and a personalised treatment plan discussion. We'll review your dental history and address any concerns. The appointment typically takes 45–60 minutes.",
  },
  {
    q: "Do you accept health insurance?",
    a: "Yes, we accept all major health funds and process claims on-site with HICAPS. We'll help you maximise your benefits and explain any out-of-pocket costs before treatment.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "We recommend a check-up and professional clean every 6 months. However, some patients with gum disease or other conditions may need more frequent visits. We'll tailor a schedule that suits your needs.",
  },
  {
    q: "Is dental treatment painful?",
    a: "Modern dentistry is virtually pain-free. We use the latest anaesthetics and techniques to ensure your comfort. For anxious patients, we offer sedation options to make your experience stress-free.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">{q}</span>
        <ChevronDown
          size={20}
          className={`text-muted shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm text-muted leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const HomeFAQ = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-6">
      <FadeInView>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted text-lg">
            Quick answers to common questions about our dental services.
          </p>
        </div>
      </FadeInView>
      
      <FadeInView delay={0.1}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-background shadow-medical p-6">
            {homePageFaqs.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted text-sm mb-4">Have more questions?</p>
            <Link
              to="/faq"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </FadeInView>
    </div>
  </section>
);

export default HomeFAQ;
