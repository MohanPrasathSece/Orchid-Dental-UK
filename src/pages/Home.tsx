import { Link } from "react-router-dom";
import { Shield, Heart, Sparkles, Clock, Star, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import FadeInView from "@/components/FadeInView";
import CTASection from "@/components/CTASection";
import HomeFAQ from "@/components/HomeFAQ";
import AnimatedCounter from "@/components/AnimatedCounter";
import SEO from "@/components/SEO";

import hero1 from "@/assets/hero-carousal/hero1.jpg";
import hero1st from "@/assets/hero-carousal/hero1st.png";
import hero2 from "@/assets/hero-carousal/hero2.png";
import hero3 from "@/assets/hero-carousal/hero3.jpg";
import hero4 from "@/assets/hero-carousal/hero4.png";
import aboutFamily from "@/assets/about-family.jpg";
import technology from "@/assets/technology.jpg";
import bannerHome from "@/assets/banner-home.jpg";
import fullscreen1 from "@/assets/fullscreenimages/banner-about.jpg";
import fullscreen2 from "@/assets/fullscreenimages/banner-contact.jpg";
import fullscreen3 from "@/assets/fullscreenimages/banner-services.jpg";

const features = [
  { icon: Shield, title: "Advanced Technology", desc: "State-of-the-art equipment for precise diagnostics and comfortable treatments." },
  { icon: Heart, title: "Patient-First Care", desc: "Every treatment plan is tailored to your unique needs and comfort level." },
  { icon: Sparkles, title: "Gentle Approach", desc: "Anxiety-free dentistry with a calming environment and compassionate team." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Early morning and evening appointments to fit your busy lifestyle." },
];

const heroImages = [hero1, hero1st, hero2, hero3, hero4];

const testimonials = [
  { name: "Rebecca M.", text: "The team at Orchid Dental made me feel completely at ease. Best dental experience I've ever had!", rating: 5 },
  { name: "David L.", text: "Professional, gentle, and thorough. Dr. Mitchell explained everything clearly and my crown looks amazing.", rating: 5 },
  { name: "Sarah K.", text: "My kids actually look forward to their dental visits now. The staff are so friendly and patient with children.", rating: 5 },
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <SEO 
        title="Modern Dental Practice in Willesden"
        description="Expert family dentistry in Willesden, London NW10. Specializing in cosmetic dentistry, whitening, Invisalign, and emergency care. Book your visit at Orchid Dental Practice today."
        canonical="/"
      />
      {/* Hero */}
      <section className="relative min-h-screen lg:h-screen overflow-hidden flex items-center justify-center" style={{backgroundImage: `url(${heroImages[currentImageIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="container mx-auto px-6 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInView>
              <div className="text-white relative z-10">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Welcome to Orchid Dental</p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
                  Dental excellence for modern family.
                </h1>
                <p className="text-base text-white/90 leading-relaxed max-w-prose mb-8">
                  Experience modern dentistry in a serene environment. Orchid Dental combines advanced technology with a gentle touch, ensuring every visit is comfortable and every smile is crafted with care.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/booking"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 active:scale-95 transition-all duration-200"
                  >
                    Book an Appointment
                  </Link>
                  <Link
                    to="/treatments"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/80 transition-colors duration-200"
                  >
                    View treatments
                  </Link>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <FadeInView>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why families choose Orchid Dental</h2>
              <p className="text-gray-600 text-lg">
                For over a decade, we've been delivering exceptional dental care with a commitment to transparency, comfort, and clinical excellence.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-card shadow-medical flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{f.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* About with image */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <div className="rounded-2xl overflow-hidden shadow-medical-lg">
                <img src={aboutFamily} alt="Happy family at Orchid Dental" className="w-full h-[360px] object-cover" />
              </div>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div>
                <p className="text-base font-semibold text-primary uppercase tracking-wider mb-3">About Us</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Care for whole family</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  At Orchid Dental, we believe that exceptional dental care should be accessible, transparent, and stress-free. Our team of experienced professionals is dedicated to providing personalized treatment plans that prioritize your long-term oral health.
                </p>
                <ul className="space-y-3 text-base text-gray-600 mb-8">
                  {["Comprehensive family dentistry", "Children's dental care specialists", "Same-day emergency appointments", "All health funds accepted"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/team"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/80 transition-colors duration-200"
                >
                  Meet our team
                </Link>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Treatments CTA */}
      <CTASection 
        title="Comprehensive dental treatments" 
        subtitle="From routine check-ups to advanced cosmetic procedures, we offer a full range of dental services tailored to your needs."
        buttonText="View All Treatments"
        to="/treatments"
        image={fullscreen3}
      />

      {/* Technology */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <p className="text-base font-semibold text-primary uppercase tracking-wider mb-3">Our Technology</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">State-of-the-art dental equipment</h2>
              <p className="text-base text-muted leading-relaxed mb-6">
                We invest in the latest dental technology to ensure the best possible care for our patients. Our modern equipment allows for more accurate diagnoses, comfortable treatments, and better outcomes.
              </p>
              <ul className="space-y-3 text-base text-muted mb-8">
                {["Digital X-ray technology", "Intraoral cameras", "Advanced sterilization systems", "Comfort-focused equipment"].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/treatments"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-colors duration-200"
              >
                View all treatments
              </Link>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-medical-lg">
                <img src={technology} alt="Modern dental equipment at Orchid Dental" className="w-full h-[360px] object-cover" />
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeInView>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { num: "15+", label: "Years experience" },
                { num: "10k+", label: "Happy patients" },
                { num: "98%", label: "Satisfaction rate" },
                { num: "6", label: "Specialist dentists" },
              ].map(s => (
                <div key={s.label} className="p-8 rounded-2xl bg-card shadow-medical text-center">
                  <p className="text-3xl font-bold text-primary font-mono">
                    <AnimatedCounter end={s.num} duration={2000} />
                  </p>
                  <p className="text-sm text-muted mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <FadeInView>
            <div className="text-center mb-16">
              <p className="text-base font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What our patients say</h2>
              <p className="text-base text-muted max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our patients have to say about their experience at Orchid Dental.
              </p>
            </div>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-medical min-h-[280px] flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-muted leading-relaxed flex-1 mb-6">
                    "{t.text}"
                  </blockquote>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-semibold text-foreground text-lg">{t.name}</p>
                    <p className="text-base text-muted">Patient</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeInView>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Find Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Visit our clinic</h2>
              <p className="text-muted">158–160 High Road, London NW10 2PB</p>
            </div>
          </FadeInView>
          <FadeInView delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-medical-lg max-w-4xl mx-auto h-[350px]">
              <iframe
                title="Orchid Dental Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.917!2d-0.2441!3d51.5353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876112e4c5a2d97%3A0x9c4f3b6c2b5b2b2b!2s158%E2%80%93160%20High%20Rd%2C%20London%20NW10%202PB%2C%20UK!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ Section */}
      <HomeFAQ />

      {/* Banner */}
      <section className="relative h-[300px] overflow-hidden">
        <img src={bannerHome} alt="Orchid Dental clinic" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <FadeInView>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Your smile is our passion</h2>
            <p className="text-white/90 text-lg max-w-lg mx-auto mb-6">
              Experience the difference of modern, compassionate dental care.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-primary font-semibold text-lg hover:bg-gray-100 active:scale-95 transition-all duration-200"
            >
              Book an Appointment
            </Link>
          </FadeInView>
        </div>
      </section>
    </div>
  );
};

export default Home;
