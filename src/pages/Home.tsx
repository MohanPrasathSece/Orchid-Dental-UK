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
  { icon: Clock, title: "Flexible Scheduling", desc: "Appointments available to fit your busy lifestyle." },
];

const heroImages = [hero1, hero1st, hero2, hero3, hero4];

const testimonials = [
  { name: "Rebecca M.", text: "The team at Orchid Dental made me feel completely at ease. Best dental experience I've ever had!", rating: 5 },
  { name: "David L.", text: "Professional, gentle, and thorough. The team explained everything clearly and my treatment looks amazing.", rating: 5 },
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
        title="Dentist in Willesden" 
        description="Modern, gentle dental care at Orchid Dental in Willesden, London—serving nearby Dollis Hill & Willesden Green. Check-ups, hygiene, Invisalign & more."
        keywords="dentist Willesden, dentist near me Willesden, dental clinic Willesden, private dentist Willesden, emergency dentist Willesden, hygienist Willesden, scale and polish Willesden, teeth whitening Willesden, Invisalign Willesden, white fillings Willesden, root canal Willesden, tooth extraction Willesden, dental crowns Willesden, dentures Willesden, dentist near Dollis Hill, Dollis Hill dentist, dentist near Willesden Green, Willesden Green dentist, emergency dentist near Dollis Hill, Invisalign near Willesden Green"
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
                <p className="text-sm text-white/80 leading-relaxed max-w-prose mb-8">
                  Based in Willesden, welcoming patients from Dollis Hill, Willesden, Brondesbury, Queens Park & Cricklewood.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 active:scale-95 transition-all duration-200"
                  >
                    Contact Us
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
              <h2 className="text-gray-900 mb-4">Why families choose Orchid Dental</h2>
              <p className="text-gray-600 text-base sm:text-lg">
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
                <h2 className="text-gray-900 mb-6">Our Mission</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  At our dental practice, we are guided by a deep commitment to patient-centered care, where every visit is approached with compassion, respect, and professionalism. We believe that dentistry is not just about treating teeth, but about fostering trust and comfort, ensuring that each patient feels heard, valued, and cared for.
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  From gentle preventive treatments to advanced restorative procedures, we combine expertise with empathy, creating an environment where oral health is nurtured with attention to both clinical excellence and personal well-being. Your smile is our priority, and our ethos is rooted in providing care that is thorough, thoughtful, and tailored to your unique needs.
                </p>
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
              <h2 className="text-foreground mb-6">State-of-the-art dental equipment</h2>
              <p className="text-base text-muted leading-relaxed mb-6">
                We invest in the latest dental technology to ensure the best possible care for our patients. Our modern equipment allows for more accurate diagnoses, comfortable treatments, and better outcomes.
              </p>
              <ul className="space-y-3 text-base text-muted mb-8">
                {["Digital X-ray technology", "Advanced sterilization systems", "Comfort-focused equipment"].map(item => (
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
                { num: "5", label: "Dentists" },
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
              <h2 className="text-foreground mb-4">What our patients say</h2>
              <p className="text-base text-muted max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our patients have to say about their experience at Orchid Dental.
              </p>
            </div>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-medical min-h-[240px] sm:min-h-[280px] flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm md:text-[10px] lg:text-sm xl:text-lg text-muted leading-relaxed flex-1 mb-6">
                    "{t.text}"
                  </blockquote>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-semibold text-foreground text-sm md:text-[10px] lg:text-sm xl:text-lg">{t.name}</p>
                    <p className="text-xs md:text-[8px] lg:text-xs xl:text-base text-muted">Patient</p>
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
              <h2 className="text-foreground mb-4">Visit our clinic</h2>
              <p className="text-muted">158–160 High Road, London NW10 2PB</p>
            </div>
          </FadeInView>
          <FadeInView delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-medical-lg max-w-4xl mx-auto h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.129349878369!2d-0.2343988!3d51.547527099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761052ca717043%3A0x66d4a3228fac5d1e!2sOrchid%20Dental!5e0!3m2!1sen!2sin!4v1773546596060!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
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
            <h2 className="text-white mb-4">Your smile is our passion</h2>
            <p className="text-white/90 text-base sm:text-lg max-w-lg mx-auto mb-6">
              Experience the difference of modern, compassionate dental care.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-white text-primary font-semibold text-base sm:text-lg hover:bg-gray-100 active:scale-95 transition-all duration-200"
            >
              Contact Us
            </Link>
          </FadeInView>
        </div>
      </section>
    </div>
  );
};

export default Home;
