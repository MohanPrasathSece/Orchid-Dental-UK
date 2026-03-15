import { Sparkles, Sun, CircleDot, Puzzle, AlignVerticalSpaceAround, Scissors, Shield, Eye, Heart, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import HomeFAQ from "@/components/HomeFAQ";
import SEO from "@/components/SEO";
import bannerImage from "@/assets/banner-treatments.jpg";
import technology from "@/assets/technology.jpg";

import hero1 from "@/assets/hero-carousal/hero1.jpg";
import hero1st from "@/assets/hero-carousal/hero1st.png";
import hero2 from "@/assets/hero-carousal/hero2.png";
import hero3 from "@/assets/hero-carousal/hero3.jpg";
import hero4 from "@/assets/hero-carousal/hero4.png";

const treatments = [
  { 
    title: "Check-ups", 
    desc: "Exam / Assessment (Adult & Child), Dental X-Rays, Emergency Appointments", 
    icon: Shield,
    image: hero1
  },
  { 
    title: "Hygiene Treatments", 
    desc: "Scale and Polish, Airflow Scale and Polish", 
    icon: Heart,
    image: hero1st
  },
  { 
    title: "Fillings", 
    desc: "White Composite Fillings, Amalgam (Silver) Fillings", 
    icon: Sparkles,
    image: hero2
  },
  { 
    title: "Root Canal Treatments", 
    desc: "Anterior Teeth Root Canal, Posterior Teeth Root Canal", 
    icon: Clock,
    image: hero3
  },
  { 
    title: "Extractions", 
    desc: "Tooth Extractions", 
    icon: CheckCircle2,
    image: hero4
  },
  { 
    title: "Fixed Prosthodontics", 
    desc: "Dental Veneers, Dental Crowns, Dental Bridges, Crown Re-cementing", 
    icon: Shield,
    image: hero1
  },
  { 
    title: "Removable Prosthodontics", 
    desc: "Acrylic Dentures, Chrome Dentures, Flexible Dentures, Denture Repairs", 
    icon: Heart,
    image: hero2
  },
  { 
    title: "Cosmetic Dentistry", 
    desc: "Teeth Whitening, Internal Whitening, Invisalign Orthodontics, Retainers", 
    icon: Sparkles,
    image: hero3
  },
  { 
    title: "Anti-Bruxism Treatments", 
    desc: "Mouthguards, Michigan Splints, B-Splints", 
    icon: Clock,
    image: hero4
  },
];

const Treatments = () => (
  <div>
    <SEO 
      title="Dental Treatments & Services in London"
      description="From dental check-ups to Invisalign and root canal treatments, discover our full range of comprehensive dental services at Orchid Dental Practice."
      canonical="/treatments"
    />
    <PageBanner
      image={bannerImage}
      title="Our Treatments"
      subtitle="Comprehensive dental care using the latest techniques and technology."
      badge="Services"
    />

    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {treatments.map((t, i) => (
              <FadeInView key={t.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img 
                      src={t.image} 
                      alt={t.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <t.icon size={20} className="text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-lg">{t.title}</h3>
                    </div>
                    <p className="text-base text-muted leading-relaxed flex-1">{t.desc}</p>
                    <Link to="/booking" className="text-base font-medium text-primary mt-4 hover:underline inline-block">
                      Book this treatment →
                    </Link>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
      </div>
    </section>

    {/* Technology */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <FadeInView>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Advanced Technology</p>
            <h2 className="text-3xl font-bold text-foreground mb-6">Cutting-edge equipment for better outcomes</h2>
            <p className="text-muted leading-relaxed mb-4">
              We use digital X-rays with 90% less radiation, intraoral cameras for detailed views, and CEREC same-day crown technology.
            </p>
            <p className="text-muted leading-relaxed">
              Our commitment to technology means faster, more comfortable treatments with superior results.
            </p>
          </FadeInView>
          <FadeInView delay={0.15}>
            <div className="rounded-2xl overflow-hidden shadow-medical-lg">
              <img src={technology} alt="Advanced dental technology" className="w-full h-[300px] object-cover" />
            </div>
          </FadeInView>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <HomeFAQ />

    {/* CTA Section */}
    <CTASection subtitle="Ready to start your treatment? Book a consultation today." />
  </div>
);

export default Treatments;
