import { Link } from "react-router-dom";
import { CreditCard, Shield, BadgePercent } from "lucide-react";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import bannerImage from "@/assets/banner-fees.jpg";

const fees = [
  { treatment: "Initial Consultation", price: "£85" },
  { treatment: "Comprehensive Exam & X-Rays", price: "£195" },
  { treatment: "Professional Teeth Cleaning", price: "£180" },
  { treatment: "Teeth Whitening (In-Chair)", price: "From £595" },
  { treatment: "Teeth Whitening (Take-Home)", price: "From £350" },
  { treatment: "Composite Filling (per surface)", price: "From £195" },
  { treatment: "Porcelain Crown", price: "From £1,500" },
  { treatment: "Root Canal (Single Canal)", price: "From £850" },
  { treatment: "Root Canal (Multi Canal)", price: "From £1,200" },
  { treatment: "Simple Extraction", price: "From £220" },
  { treatment: "Surgical Extraction", price: "From £380" },
  { treatment: "Dental Implant (per tooth)", price: "From £4,500" },
  { treatment: "Orthodontic Consultation", price: "£150" },
  { treatment: "Clear Aligners (full treatment)", price: "From £5,500" },
];

const Fees = () => (
  <div>
    <SEO 
      title="Transparent Dental Fees & Pricing"
      description="View our transparent dental pricing at Orchid Dental. We provide clear costs for check-ups, hygiene, and cosmetic treatments in London NW10."
      canonical="/fees"
    />
    <PageBanner
      image={bannerImage}
      title="Our Fees"
      subtitle="Transparent pricing with no hidden costs."
      badge="Pricing"
    />

    <section className="py-20">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="max-w-4xl mx-auto rounded-2xl bg-card shadow-medical overflow-hidden">
            <div className="px-8 py-6 bg-primary-muted">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-foreground">Treatment</span>
                <span className="text-lg font-semibold text-foreground">Fee</span>
              </div>
            </div>
            <div>
              {fees.map((fee, i) => (
                <div
                  key={fee.treatment}
                  className={`px-8 py-6 flex justify-between items-center ${
                    i % 2 === 0 ? "bg-card" : "bg-background"
                  }`}
                >
                  <span className="text-base text-foreground">{fee.treatment}</span>
                  <span className="text-base font-semibold text-foreground font-mono tabular-nums">{fee.price}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Payment Options */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          {[
            { icon: CreditCard, title: "Multiple Payment Options", desc: "Credit cards, EFTPOS, and cash accepted." },
            { icon: Shield, title: "Health Fund Claims", desc: "All major health funds processed on-site with HICAPS." },
            { icon: BadgePercent, title: "Payment Plans", desc: "Interest-free plans for treatments over $1,000." },
          ].map((item, i) => (
            <FadeInView key={item.title} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-card shadow-medical text-center min-h-[250px]">
                <div className="w-16 h-16 rounded-lg bg-primary-muted flex items-center justify-center mx-auto mb-6">
                  <item.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-3">{item.title}</h3>
                <p className="text-base text-muted">{item.desc}</p>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.2}>
          <div className="max-w-3xl mx-auto mt-12 p-8 rounded-2xl bg-primary-muted text-center">
            <p className="text-base text-foreground">
              <strong>Note:</strong> All fees are quoted before treatment begins. Prices may vary based on individual treatment complexity. Please <Link to="/contact" className="text-primary font-medium hover:underline">contact us</Link> for a personalised quote.
            </p>
          </div>
        </FadeInView>
      </div>
    </section>

    <CTASection title="Need a personalised quote?" subtitle="Book a consultation and we'll provide a detailed treatment plan with costs." />
  </div>
);

export default Fees;
