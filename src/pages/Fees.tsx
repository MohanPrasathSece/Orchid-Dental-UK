import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import bannerImage from "@/assets/banner-fees.jpg";

const feeSections = [
  {
    title: "1. Check-ups & Assessments",
    items: [
      { treatment: "Exam / Assessment (Adult & Child)", fee: "£40" },
      { treatment: "X-Ray (each)", fee: "£10" },
      { treatment: "Emergency Appointment (includes 1 X-ray)", fee: "£50" },
    ],
  },
  {
    title: "2. Hygienist",
    items: [
      { treatment: "Scale and Polish", fee: "£70" },
      { treatment: "Air Flow Scale and Polish", fee: "£140" },
    ],
  },
  {
    title: "3. Fillings",
    items: [
      { treatment: "White Fillings (Composite)", fee: "From £160" },
      { treatment: "Amalgam Fillings (Silver)", fee: "From £150" },
    ],
  },
  {
    title: "4. Root Canal Treatments",
    items: [
      { treatment: "Anterior Teeth (Teeth 1–3)", fee: "£400" },
      { treatment: "Posterior Teeth (Teeth 4–7)", fee: "£500" },
    ],
  },
  {
    title: "5. Extractions",
    items: [{ treatment: "Tooth Extraction", fee: "From £160" }],
  },
  {
    title: "6. Fixed Prosthodontics",
    items: [
      { treatment: "Veneers (Direct Composite / Porcelain)", fee: "£375 / £500" },
      { treatment: "Gold Crowns (Yellow / White Gold)", fee: "From £899" },
      { treatment: "Porcelain Bonded Crowns", fee: "From £575" },
      { treatment: "All Ceramic Crowns", fee: "From £675" },
      { treatment: "Bridges (Per Unit)", fee: "From £390" },
      { treatment: "Re-cement Single Crown", fee: "From £80" },
    ],
  },
  {
    title: "7. Removable Prosthodontics (Dentures)",
    items: [
      { treatment: "Partial Acrylic Denture", fee: "£490" },
      { treatment: "Complete Acrylic Denture", fee: "£590" },
      { treatment: "Partial Chrome Denture", fee: "£890" },
      { treatment: "Flexible Acrylic Denture", fee: "£890" },
      { treatment: "Denture Repair", fee: "From £80" },
    ],
  },
  {
    title: "8. Cosmetic Dentistry",
    items: [
      { treatment: "Teeth Whitening (Home Kit)", fee: "£350" },
      { treatment: "Internal / External Whitening (Single Tooth)", fee: "£250" },
      { treatment: "Combined Whitening Treatments", fee: "£500" },
      { treatment: "Whitening Syringe (Extra)", fee: "£45" },
    ],
  },
  {
    title: "9. Orthodontics",
    items: [
      { treatment: "Invisalign – 1 Arch", fee: "From £2650" },
      { treatment: "Invisalign – 2 Arches", fee: "From £3350" },
      { treatment: "Retainer (Hard)", fee: "From £240" },
      { treatment: "Invisalign Retainer", fee: "From £445" },
    ],
  },
  {
    title: "10. Anti Bruxism",
    items: [
      { treatment: "Soft Mouthguard", fee: "£230" },
      { treatment: "Michigan Splint Mouthguard", fee: "£430" },
      { treatment: "B-Splint", fee: "£380" },
    ],
  },
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
          <div className="max-w-4xl mx-auto space-y-10">
            {feeSections.map((section) => (
              <div key={section.title} className="rounded-2xl bg-card shadow-medical overflow-hidden">
                <div className="px-4 py-4 sm:px-8 sm:py-6 bg-primary-muted">
                  <h2 className="text-base sm:text-lg font-semibold text-foreground">{section.title}</h2>
                </div>
                <div>
                  {section.items.map((item, i) => (
                    <div
                      key={`${section.title}-${item.treatment}`}
                      className={`px-4 py-4 sm:px-8 sm:py-6 flex justify-between items-center gap-4 sm:gap-6 ${
                        i % 2 === 0 ? "bg-card" : "bg-background"
                      }`}
                    >
                      <span className="text-sm sm:text-base text-foreground">{item.treatment}</span>
                      <span className="text-sm sm:text-base font-semibold text-foreground font-mono tabular-nums whitespace-nowrap">{item.fee}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeInView>

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
