import { useState, FormEvent, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";
import FadeInView from "@/components/FadeInView";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import bannerImage from "@/assets/banner-contact.jpg";
import emailjs from "@emailjs/browser";

// TO CONFIGURE SMTP:
// 1. Create an account at https://www.emailjs.com/
// 2. Add your Email Service (e.g. Gmail, Outlook)
// 3. Create an Email Template
// 4. Update the IDs below or use environment variables
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (SERVICE_ID === "YOUR_SERVICE_ID") {
      // Fallback for demo if not configured
      setSending(true);
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const phone = formData.get("phone") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;

      const subject = encodeURIComponent("Website Enquiry from " + name);
      const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:info@orchiddental.co.uk?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setSending(false);
        toast.info("SMTP Not Configured - Opening email client instead.");
        (e.target as HTMLFormElement).reset();
      }, 800);
      return;
    }

    setSending(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!");
        if (formRef.current) formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again or use the phone number.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div>
      <SEO 
        title="Contact Us - Orchid Dental London"
        description="Get in touch with Orchid Dental Practice in Willesden, London NW10. Call us at 020 8459 2626 or book your appointment online."
        canonical="/contact"
      />
      <PageBanner
        image={bannerImage}
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch today."
        badge="Get In Touch"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <FadeInView>
              <form ref={formRef} onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card shadow-medical space-y-5">
                <h2 className="text-xl font-bold text-foreground mb-2">Send us a message</h2>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input required name="name" type="text" className="w-full px-4 py-3 rounded-lg bg-background border-0 text-foreground text-sm placeholder:text-muted focus:ring-2 focus:ring-primary/20 focus:outline-none transition" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <input required name="phone" type="tel" className="w-full px-4 py-3 rounded-lg bg-background border-0 text-foreground text-sm placeholder:text-muted focus:ring-2 focus:ring-primary/20 focus:outline-none transition font-mono" placeholder="0412 345 678" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input required name="email" type="email" className="w-full px-4 py-3 rounded-lg bg-background border-0 text-foreground text-sm placeholder:text-muted focus:ring-2 focus:ring-primary/20 focus:outline-none transition" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea required name="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-background border-0 text-foreground text-sm placeholder:text-muted focus:ring-2 focus:ring-primary/20 focus:outline-none transition resize-none" placeholder="Tell us about your needs..." />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 active:scale-95 transition-all duration-200 disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </FadeInView>

            {/* Info + Map */}
            <FadeInView delay={0.15}>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-card shadow-medical space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <a href="tel:02084592626" className="text-sm text-muted font-mono hover:text-primary transition-colors">020 8459 2626</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a href="mailto:info@orchiddental.co.uk" className="text-sm text-muted hover:text-primary transition-colors">info@orchiddental.co.uk</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted">158–160 High Road, London NW10 2PB</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Hours</p>
                      <p className="text-sm text-muted">Mon–Fri: 8am – 6pm</p>
                      <p className="text-sm text-muted">Sat: 9am – 2pm</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-card shadow-medical">
                  <h3 className="font-semibold text-foreground mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-lg bg-primary-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-primary transition-colors" aria-label="Facebook">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-primary-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-primary transition-colors" aria-label="Instagram">
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-medical h-[280px]">
                  <iframe
                    title="Orchid Dental Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.917!2d-0.2441!3d51.5353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876112e4c5a2d97%3A0x9c4f3b6c2b5b2b2b!2s158%E2%80%93160%20High%20Rd%2C%20London%20NW10%202PB%2C%20UK!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <CTASection title="Prefer to book online?" subtitle="Use our appointment booking system to reserve your visit." buttonText="Book an Appointment" to="/booking" />
    </div>
  );
};

export default Contact;
