import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Camera,
  CheckCircle,
  ChevronDown,
  Loader2,
  Mail,
  Menu,
  Phone,
  Send,
  Sparkles,
  Video,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useActor } from "./hooks/useActor";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Camera,
    title: "Brand Photography",
    description:
      "Stunning product and brand imagery that elevates your identity and captures attention across all platforms.",
    badges: ["E-commerce", "Lifestyle", "Editorial"],
  },
  {
    icon: Video,
    title: "UGC Videos",
    description:
      "Authentic user-generated style content that drives conversions and builds trust with your audience.",
    badges: ["Social Media", "Ads", "Reels"],
  },
  {
    icon: Sparkles,
    title: "Creative Design",
    description:
      "Cohesive visual identities and creative assets that make your brand unforgettable in a crowded market.",
    badges: ["Branding", "Graphics", "Campaign"],
  },
];

const portfolioItems = [
  {
    image: "/assets/generated/portfolio-1.dim_600x400.jpg",
    title: "Luxury Skincare Brand",
    category: "Photography",
    tag: "Image",
  },
  {
    image: "/assets/generated/portfolio-2.dim_600x400.jpg",
    title: "Product Unboxing UGC",
    category: "Content Creation",
    tag: "Video",
  },
  {
    image: "/assets/generated/portfolio-3.dim_600x400.jpg",
    title: "Fashion Brand Campaign",
    category: "Photography",
    tag: "Image",
  },
  {
    image: "/assets/generated/portfolio-4.dim_600x400.jpg",
    title: "F&B Brand Visuals",
    category: "Photography",
    tag: "Image",
  },
  {
    image: "/assets/generated/portfolio-5.dim_600x400.jpg",
    title: "Tech Product Shoot",
    category: "Photography",
    tag: "Image",
  },
  {
    image: "/assets/generated/portfolio-6.dim_600x400.jpg",
    title: "Skincare UGC Series",
    category: "Content Creation",
    tag: "Video",
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    setActiveSection(id);
    scrollTo(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-bg/95 backdrop-blur-md shadow-lg"
          : "bg-dark-bg/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="font-black text-2xl tracking-widest text-white uppercase"
          data-ocid="nav.link"
        >
          ADARSH
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                activeSection === link.href.replace("#", "")
                  ? "text-gold border-b-2 border-gold pb-0.5"
                  : "text-white/70 hover:text-white"
              }`}
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Button
            onClick={() => handleNavClick("#contact")}
            className="bg-white text-dark-bg hover:bg-gold hover:text-dark-bg font-bold uppercase tracking-wider text-sm rounded-full px-6 transition-all duration-300"
            data-ocid="nav.primary_button"
          >
            GET A QUOTE
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-dark-bg/98 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-white/80 hover:text-white font-medium uppercase tracking-wider text-sm py-2"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => handleNavClick("#contact")}
                className="bg-white text-dark-bg hover:bg-gold font-bold uppercase tracking-wider text-sm rounded-full mt-2"
                data-ocid="nav.primary_button"
              >
                GET A QUOTE
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/assets/generated/hero-bg.dim_1400x800.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Visual Designer & Content Creator
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none mb-4">
            ADARSH
            <br />
            <span className="text-gold">CREATIVE.</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-6 uppercase tracking-wide">
            Visuals That Convert.
          </h2>

          <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-10">
            I craft high-quality brand images and UGC videos that drive
            engagement and sales. Helping brands tell their stories through
            visuals that make a real impact.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => scrollTo("portfolio")}
              className="bg-gold text-dark-bg hover:bg-gold-light font-bold uppercase tracking-wider text-sm px-8 py-3 h-auto rounded-full shadow-gold transition-all duration-300 hover:shadow-lg hover:scale-105"
              data-ocid="hero.primary_button"
            >
              VIEW PORTFOLIO
            </Button>
            <Button
              onClick={() => scrollTo("contact")}
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 hover:border-white font-bold uppercase tracking-wider text-sm px-8 py-3 h-auto rounded-full transition-all duration-300"
              data-ocid="hero.secondary_button"
            >
              CONTACT ME
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-1"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              What I Do
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1E232D]">
            My Services
          </h2>
          <p className="text-[#6B7280] mt-4 text-base max-w-xl mx-auto">
            Premium creative services that elevate your brand's visual presence
            and drive meaningful results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-300 cursor-default"
                data-ocid={`services.card.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-xl bg-[#1E232D] flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                  <Icon
                    className="text-gold group-hover:text-[#1E232D] transition-colors duration-300"
                    size={26}
                  />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-[#1E232D] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.badges.map((b) => (
                    <span
                      key={b}
                      className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EFECE4] text-[#3A3F48]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const tagColors: Record<string, string> = {
    Image: "bg-gold text-dark-bg",
    Video: "bg-[#1E232D] text-white",
    Design: "bg-white text-dark-bg",
  };

  return (
    <section id="portfolio" className="py-24 bg-[#EFECE4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#1E232D]" />
            <span className="text-[#3A3F48] text-sm font-semibold uppercase tracking-widest">
              My Work
            </span>
            <div className="h-px w-12 bg-[#1E232D]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1E232D]">
            Latest Work
          </h2>
          <p className="text-[#6B7280] mt-4 text-base max-w-xl mx-auto">
            A selection of brand photography and UGC content created for clients
            across various industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              data-ocid={`portfolio.item.${i + 1}`}
            >
              <div
                className="aspect-[3/2] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-4 left-4">
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${tagColors[item.tag] ?? "bg-white text-dark-bg"}`}
                >
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-bold text-lg leading-tight">
                  {item.title}
                </p>
                <p className="text-white/70 text-sm mt-1">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const { actor } = useActor();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await actor.submit(formData.name, formData.email, formData.message);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent! I'll get back to you soon.");
    } catch (_err) {
      setError("Something went wrong. Please try again or contact directly.");
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
        data-ocid="contact.success_state"
      >
        <CheckCircle className="text-gold mx-auto mb-4" size={48} />
        <h4 className="text-white font-bold text-xl mb-2">Message Sent!</h4>
        <p className="text-white/60 text-sm">
          Thank you! I'll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-gold text-sm hover:underline font-medium"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      data-ocid="contact.modal"
    >
      <Input
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold h-12 rounded-xl"
        data-ocid="contact.input"
      />
      <Input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold h-12 rounded-xl"
        data-ocid="contact.input"
      />
      <Textarea
        placeholder="Tell me about your project..."
        value={formData.message}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, message: e.target.value }))
        }
        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold rounded-xl resize-none"
        rows={4}
        data-ocid="contact.textarea"
      />
      {error && (
        <p className="text-red-400 text-sm" data-ocid="contact.error_state">
          {error}
        </p>
      )}
      <Button
        type="submit"
        disabled={submitting}
        className="w-full bg-gold hover:bg-gold-light text-dark-bg font-bold uppercase tracking-wider text-sm h-12 rounded-xl transition-all duration-300 hover:shadow-gold hover:scale-[1.02]"
        data-ocid="contact.submit_button"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            SEND MESSAGE
          </>
        )}
      </Button>
    </form>
  );
}

function AboutContactSection() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">
                Who I Am
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1E232D] mb-8">
              ABOUT ADARSH
            </h2>

            <div className="relative mb-8 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/assets/generated/designer-portrait.dim_400x500.jpg"
                alt="Adarsh Rai Pandit - Visual Designer"
                className="w-full object-cover"
                style={{ maxHeight: "400px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E232D]/40 to-transparent" />
            </div>

            <p className="text-[#3A3F48] text-base leading-relaxed mb-4">
              Hi, I'm{" "}
              <span className="font-bold text-[#1E232D]">
                Adarsh Rai Pandit
              </span>{" "}
              — a passionate visual designer specializing in brand imagery and
              UGC videos. I help brands tell their stories through compelling
              visuals that drive real results.
            </p>
            <p className="text-[#6B7280] text-base leading-relaxed mb-6">
              With a keen eye for aesthetics and deep understanding of what
              converts, I create content that not only looks stunning but also
              performs. From luxury skincare to tech startups, I bring every
              brand vision to life.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Brand Photography",
                "UGC Videos",
                "Product Shoots",
                "Social Media",
                "Ad Creatives",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full bg-[#EFECE4] text-[#3A3F48] border border-[#1E232D]/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1E232D] rounded-3xl p-8 lg:p-10 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">
                Get In Touch
              </span>
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-2">
              LET'S CREATE
            </h3>
            <h3 className="text-3xl font-black uppercase tracking-tight text-gold mb-8">
              TOGETHER
            </h3>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:adarshraipandit@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors group"
                data-ocid="contact.link"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-gold/20 flex items-center justify-center transition-colors">
                  <Mail size={18} className="text-gold" />
                </div>
                <span className="text-sm">adarshraipandit@gmail.com</span>
              </a>
              <a
                href="tel:+916306481740"
                className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors group"
                data-ocid="contact.link"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-gold/20 flex items-center justify-center transition-colors">
                  <Phone size={18} className="text-gold" />
                </div>
                <span className="text-sm">+91 6306481740</span>
              </a>
            </div>

            <div className="h-px bg-white/10 mb-8" />
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-[#1E232D] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-black text-2xl tracking-widest text-white uppercase">
              ADARSH CREATIVE STUDIO
            </span>
            <p className="text-white/40 text-xs mt-1 uppercase tracking-wider">
              Visuals That Convert
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href.replace("#", ""));
                }}
                className="text-white/50 hover:text-gold text-xs uppercase tracking-wider transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="text-white/40 text-xs text-center">
            © {year}.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="mailto:adarshraipandit@gmail.com"
              className="flex items-center gap-2 text-white/50 hover:text-gold text-xs transition-colors"
              data-ocid="contact.link"
            >
              <Mail size={14} />
              adarshraipandit@gmail.com
            </a>
            <span className="text-white/20">|</span>
            <a
              href="tel:+916306481740"
              className="flex items-center gap-2 text-white/50 hover:text-gold text-xs transition-colors"
              data-ocid="contact.link"
            >
              <Phone size={14} />
              +91 6306481740
            </a>
          </div>
          <p className="text-white/30 text-xs">
            All rights reserved © {year} Adarsh Rai Pandit
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster richColors position="top-right" />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutContactSection />
      </main>
      <Footer />
    </div>
  );
}
