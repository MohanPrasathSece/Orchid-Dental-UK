import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import bannerImage from "@/assets/banner-home.jpg";

const additionalFaqs = [
  {
    q: "What payment options do you offer?",
    a: "We accept all major credit cards, EFTPOS, and cash. For treatments over $1,000 we offer interest-free payment plans. We also offer a 10% discount for upfront full payments on treatment plans.",
  },
  {
    q: "Do you treat children?",
    a: "Absolutely! We welcome patients of all ages. We recommend a child's first dental visit by their first birthday or when their first tooth appears. Our team is experienced in making children feel comfortable and at ease.",
  },
  {
    q: "What are your opening hours?",
    a: "We're open Monday to Friday from 8am to 6pm and Saturday from 9am to 2pm. We're closed on Sundays and public holidays. Emergency appointments are available during business hours.",
  },
];

const treatmentFaqs = [
  {
    q: "How long does teeth whitening last?",
    a: "Professional whitening results typically last 1–3 years, depending on your diet and oral hygiene habits. We provide take-home kits for maintenance touch-ups to keep your smile bright.",
  },
  {
    q: "What is a root canal and is it necessary?",
    a: "A root canal removes infected tissue inside a tooth to save it from extraction. It's a routine procedure performed under local anaesthetic and is usually no more uncomfortable than a filling. Saving a natural tooth is always preferred when possible.",
  },
  {
    q: "How long do dental implants last?",
    a: "With proper care, dental implants can last a lifetime. The implant itself is made of titanium which fuses with your jawbone. The crown on top typically lasts 10–15 years before it may need replacement.",
  },
  {
    q: "Are braces or clear aligners better for me?",
    a: "Both options are effective. Clear aligners like Invisalign are virtually invisible and removable, making them popular with adults. Traditional braces may be more suitable for complex cases. We'll recommend the best option during your orthodontic consultation.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Call us immediately during business hours. For a knocked-out tooth, keep it moist (in milk or saliva) and come in within 30 minutes for the best chance of saving it. For severe pain or swelling, take over-the-counter pain relief and contact us.",
  },
  {
    q: "How long does it take to get a dental crown?",
    a: "With our CEREC technology, we can create same-day crowns in a single visit. Traditional crowns require two visits over 2–3 weeks. We'll discuss which option is best for your situation.",
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
        <p className="text-muted leading-relaxed" style={{ fontSize: '17px' }}>{a}</p>
      </div>
    </div>
  );
};

const FAQ = () => (
  <div>
    <SEO 
      title="Dental FAQs & Patient Information"
      description="Frequently asked questions about dental treatments, emergency care, and appointments at Orchid Dental Practice in London."
      canonical="/faq"
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [...additionalFaqs, ...treatmentFaqs].map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a,
            },
          })),
        }),
      }}
    />
    <PageBanner
      image={bannerImage}
      title="Frequently Asked Questions"
      subtitle="Find answers to the most common questions about our dental services."
      badge="FAQ"
    />

    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FadeInView>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Additional Questions</h2>
              <p className="text-muted text-sm mb-6">More details about our services and policies.</p>
              <div className="rounded-2xl bg-card shadow-medical p-6 min-h-[400px]">
                {additionalFaqs.map((faq) => (
                  <FAQItem key={faq.q} {...faq} />
                ))}
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={0.1}>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Treatment Questions</h2>
              <p className="text-muted text-sm mb-6">About our procedures and care.</p>
              <div className="rounded-2xl bg-card shadow-medical p-6 min-h-[400px]">
                {treatmentFaqs.map((faq) => (
                  <FAQItem key={faq.q} {...faq} />
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>

    <FadeInView>
      <section className="pb-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-xl mx-auto p-8 rounded-2xl bg-card shadow-medical">
            <h3 className="text-xl font-bold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted text-sm mb-6">Our friendly team is here to help.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 active:scale-95 transition-all duration-200"
              >
                Contact Us
              </Link>
              <a
                href="tel:02084592626"
                className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/80 transition-colors duration-200"
              >
                Call 020 8459 2626
              </a>
            </div>
          </div>
        </div>
      </section>
    </FadeInView>

    <CTASection />
  </div>
);

export default FAQ;
