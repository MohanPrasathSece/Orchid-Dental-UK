import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import FadeInView from "@/components/FadeInView";

interface HomeFAQProps {
  useTreatmentQuestions?: boolean;
}

const homePageFaqs = [
  {
    q: "What should I expect at my first visit?",
    a: "Your first visit includes a comprehensive exam, digital X-rays, and a personalised treatment plan discussion. We'll review your dental history and address any concerns.",
  },
  {
    q: "Do you accept health insurance?",
    a: "Yes, we accept all major health funds. Please contact us to discuss your coverage.",
  },
  {
    q: "How often should I visit dentist?",
    a: "We recommend a check-up and professional clean every 6 months. However, some patients with gum disease or other conditions may need more frequent visits. We'll tailor a schedule that suits your needs.",
  },
  {
    q: "Is dental treatment painful?",
    a: "Modern dentistry is virtually pain-free. We use latest anaesthetics and techniques to ensure your comfort. For anxious patients, we offer sedation options to make your experience stress-free.",
  },
];

const treatmentFaqs = [
  {
    q: "How long does teeth whitening last?",
    a: "Professional teeth whitening results typically last 1–3 years, depending on your diet and oral hygiene habits. You can purchase extra whitening syringes for maintenance touch-ups to keep your smile bright.",
  },
  {
    q: "What is a root canal and is it necessary?",
    a: "A root canal treatment is used to remove infection from inside a tooth and save it from extraction. It helps relieve pain and restore the tooth so it can function normally.",
  },
  {
    q: "Are braces or clear aligners better for me?",
    a: "The best option depends on your dental condition and treatment goals. During your consultation, the dentist will examine your teeth and recommend the most suitable orthodontic treatment.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Call us immediately during business hours so we can assess your situation and arrange an emergency appointment if necessary.",
  },
];

const FAQItem = ({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-foreground pr-4 group-hover:text-primary transition-colors text-base lg:text-lg">{q}</span>
        <ChevronDown
          size={20}
          className={`text-muted shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-[15px] sm:text-sm lg:text-base text-muted leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

interface HomeFAQProps {
  useTreatmentQuestions?: boolean;
}

const HomeFAQ = ({ useTreatmentQuestions = false }: HomeFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = useTreatmentQuestions ? treatmentFaqs : homePageFaqs;

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted text-base sm:text-lg">
              Quick answers to common questions about our dental services.
            </p>
          </div>
        </FadeInView>
        
        <FadeInView delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-background shadow-medical p-6">
              {faqs.map((faq, idx) => (
                <FAQItem key={faq.q} {...faq} isOpen={openIndex === idx} onToggle={() => handleToggle(idx)} />
              ))}
            </div>
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
        </FadeInView>
      </div>
    </section>
  );
};

export default HomeFAQ;
