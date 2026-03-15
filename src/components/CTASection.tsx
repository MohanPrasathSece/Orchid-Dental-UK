import { Link } from "react-router-dom";
import FadeInView from "@/components/FadeInView";
import bannerHome from "@/assets/banner-home.jpg";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  to?: string;
  image?: string;
}

const CTASection = ({
  title = "Ready for a healthier smile?",
  subtitle = "Book your consultation today and discover the Orchid Dental difference.",
  buttonText = "Book an Appointment",
  to = "/booking",
  image = bannerHome,
}: CTASectionProps) => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={image} alt="Background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
    </div>
    
    <div className="container relative z-10 mx-auto px-6 text-center">
      <FadeInView>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h2>
        <p className="text-white/90 text-sm lg:text-base mb-8 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        <Link
          to={to}
          className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-primary font-bold text-lg hover:bg-gray-100 active:scale-95 transition-all duration-300 shadow-xl"
        >
          {buttonText}
        </Link>
      </FadeInView>
    </div>
  </section>
);

export default CTASection;
