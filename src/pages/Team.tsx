import { Link } from "react-router-dom";
import CTASection from "@/components/CTASection";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import SEO from "@/components/SEO";
import bannerImage from "@/assets/banner-team.jpg";
import doctorJames from "@/assets/doctor-james-chen.svg";
import doctorPriya from "@/assets/doctor-priya-sharma.svg";
import doctorMichael from "@/assets/doctor-michael-torres.svg";
import staffEmily from "@/assets/staff-emily-watson.svg";
import staffLisa from "@/assets/staff-lisa-nguyen.svg";
import { Users, Award, Heart } from "lucide-react";

const team = [
  {
    name: "Dr. Ashish Patel",
    role: "Principal Dentist",
    qualifications: "BDS, MJDF RCS Eng",
    bio: "Dr Ashish Patel graduated from prestigious Barts and The London School of Medicine and Dentistry. As principal dentist, he brings extensive clinical experience and leadership to the practice. He is committed to providing high-quality dental care and continually updating his skills with advanced training and modern techniques.",
    image: doctorMichael,
    featured: true,
  },
  {
    name: "Dr. Rasmita Rabdiya",
    role: "Dentist",
    qualifications: "BDS",
    bio: "Dr Rasmita Rabdiya brings warmth, professionalism, and dedication to patient care. She focuses on ensuring patients feel comfortable and confident throughout their treatment while delivering excellent dental results.",
    image: doctorJames,
    featured: false,
  },
  {
    name: "Dr. Mayur Bhatt",
    role: "Dentist",
    qualifications: "BDS",
    bio: "Dr Mayur Bhatt provides comprehensive dental care with a strong focus on patient comfort and long-term oral health.",
    image: doctorPriya,
    featured: false,
  },
  {
    name: "Dr. Yi Gi Chin",
    role: "Dentist",
    qualifications: "BDS",
    bio: "Dr Yi Gi Chin is committed to delivering high-quality dentistry and building strong relationships with patients.",
    image: doctorJames,
    featured: false,
  },
  {
    name: "Dr. Eman Khurram",
    role: "Dentist",
    qualifications: "BDS",
    bio: "Dr Eman Khurram provides patient-focused dental care with attention to detail and a dedication to achieving excellent treatment outcomes.",
    image: doctorPriya,
    featured: false,
  },
  {
    name: "Hir Patel",
    role: "Hygienist & Therapist",
    qualifications: "MSc",
    bio: "Hir Patel is a dedicated dental hygienist and therapist who focuses on preventive dentistry. He helps patients maintain healthy gums and teeth through professional cleaning and oral hygiene education.",
    image: staffEmily,
    featured: false,
  },
];

const Team = () => (
  <div>
    <SEO 
      title="Meet Our Expert Team"
      description="Meet the highly qualified dental professionals at Orchid Dental Practice. Led by Dr. Ashish Patel, our team is committed to providing expert care in London."
      canonical="/team"
    />
    <PageBanner
      image={bannerImage}
      title="Meet Our Team"
      subtitle="Our dedicated team of dental professionals brings decades of combined experience."
      badge="Our People"
    />

    {/* Featured Principal Dentist */}
    <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-72 sm:h-96 lg:h-auto">
                  <img 
                    src={team[0].image} 
                    alt={team[0].name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Principal Dentist
                  </div>
                </div>
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                    {team[0].name}
                  </h2>
                  <p className="text-base sm:text-lg text-primary font-medium mb-2">
                    {team[0].qualifications}
                  </p>
                  <p className="text-base text-muted leading-relaxed mb-6">
                    {team[0].bio}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-colors duration-200 w-fit"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>

    {/* Team Members Grid */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="text-center mb-16">
            <p className="text-base font-semibold text-primary uppercase tracking-wider mb-3">Our Dental Team</p>
            <h2 className="text-foreground mb-4">Expert Care Professionals</h2>
            <p className="text-base text-muted max-w-2xl mx-auto">
              Meet the dedicated professionals who make Orchid Dental Practice a place of excellence and compassion.
            </p>
          </div>
        </FadeInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.slice(1).map((member, i) => (
            <FadeInView key={member.name} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-52 sm:h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-base sm:text-lg">{member.name}</h3>
                    <p className="text-white/90 text-xs sm:text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-base text-primary font-mono mb-4">{member.qualifications}</p>
                  <p className="text-base text-muted leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base font-semibold text-primary uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="text-foreground mb-6">What drives our team</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "Compassion", desc: "We treat every patient with empathy, kindness, and respect." },
                { title: "Excellence", desc: "We pursue the highest standards in every procedure." },
                { title: "Integrity", desc: "Honest advice, transparent pricing, no surprises." },
              ].map((value, i) => (
                <FadeInView key={value.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
                    <h3 className="font-semibold text-foreground mb-3 text-base sm:text-lg">{value.title}</h3>
                    <p className="text-muted text-base">{value.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>

    <CTASection 
      title="Ready to experience exceptional dental care?" 
      subtitle="Join thousands of satisfied patients who trust our team with their smiles." 
      buttonText="Contact Us" 
      to="/contact" 
    />
  </div>
);

export default Team;
