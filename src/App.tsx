/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Wrench, Droplet, Droplets, PhoneCall, ShieldCheck, Clock, Award, Star, ThumbsUp, Menu, X, CheckCircle2, AlertTriangle, Waves, Flame, Bath, Search, ArrowRight, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

const SERVICES = [
  {
    id: 'emergency',
    title: 'Emergency Plumbing',
    icon: AlertTriangle,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800',
    description: '24/7 rapid response for bursts, leaks, and critical plumbing failures.',
    details: 'When a pipe bursts or a major leak threatens your home, every minute counts. Our emergency plumbing team is on standby 24/7 to provide rapid, effective solutions to mitigate water damage and restore your plumbing systems immediately.'
  },
  {
    id: 'drain',
    title: 'Drain Cleaning',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    description: 'Professional clearing of stubborn clogs and slow drains.',
    details: 'Stubborn clogs and slow drains can be frustrating and unsanitary. We use state-of-the-art equipment to clear blockages safely and effectively, ensuring your pipes flow smoothly without risking damage to your plumbing infrastructure.'
  },
  {
    id: 'water-heater',
    title: 'Water Heaters',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
    description: 'Repair, replacement, and maintenance for all water heater types.',
    details: 'Whether you need a quick repair for a failing water heater or a complete upgrade to a modern tankless system, our experts provide comprehensive water heater services to ensure you always have reliable hot water.'
  },
  {
    id: 'leak',
    title: 'Leak Detection',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1521207418485-99c711a20c14?auto=format&fit=crop&q=80&w=800',
    description: 'Advanced technology to locate and repair hidden leaks.',
    details: 'Hidden water leaks can cause extensive structural damage and mold growth if left unchecked. We utilize advanced, non-invasive acoustic and thermal imaging technology to pinpoint leaks accurately and repair them with minimal disruption.'
  },
  {
    id: 'toilet',
    title: 'Toilet Repair',
    icon: Bath,
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800',
    description: 'Fixing running, leaking, or completely clogged toilets.',
    details: 'A malfunctioning toilet is a major inconvenience. From continuously running water to severe clogs and seal replacements, we diagnose and fix all toilet issues quickly, or provide seamless installations of new, high-efficiency models.'
  },
  {
    id: 'faucet',
    title: 'Faucet & Sink Repair',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800',
    description: 'Stop drips and upgrade your kitchen or bathroom fixtures.',
    details: 'Dripping faucets waste water and money. We repair all types of faucets and sinks, addressing leaks, low water pressure, and worn-out parts. We also offer expert installation for aesthetic and functional fixture upgrades.'
  },
  {
    id: 'pipe',
    title: 'Pipe Replacement',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1540822606560-60a5e8405e32?auto=format&fit=crop&q=80&w=800',
    description: 'Replacing old, corroded, or damaged pipes.',
    details: 'Aging or damaged pipes are prone to leaks and can degrade water quality. We offer comprehensive pipe replacement and repiping services using modern, durable materials to secure your home’s plumbing for decades.'
  },
  {
    id: 'sewer',
    title: 'Sewer Line Services',
    icon: Search,
    image: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&q=80&w=800',
    description: 'Sewer camera inspections and main line clearing.',
    details: 'Sewer line backups are serious plumbing emergencies. We offer comprehensive sewer line services, including high-resolution camera inspections to identify root intrusions or collapses, followed by effective clearing or repair solutions.'
  }
];

function Navbar({ onViewHome, currentView }: { onViewHome: () => void, currentView: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (currentView !== 'home') {
      onViewHome();
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-gray-900 shadow-md py-4"
          : "bg-transparent text-white py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            onViewHome();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Droplet className={`w-8 h-8 ${isScrolled ? "text-blue-600" : "text-blue-400"}`} />
          <span className="text-xl font-display font-bold tracking-tight">PlumbTrust</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-blue-500 transition-colors">Services</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-blue-500 transition-colors">About Us</a>
          <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')} className="hover:text-blue-500 transition-colors">Reviews</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-blue-500 transition-colors">Contact</a>
          <button 
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all ${
            isScrolled 
              ? "bg-blue-600 text-white hover:bg-blue-700" 
              : "bg-white text-blue-900 hover:bg-blue-50"
          }`}>
            <PhoneCall className="w-4 h-4" />
            (555) 123-4567
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg text-gray-900 flex flex-col py-4 border-t border-gray-100">
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="px-6 py-3 hover:bg-gray-50">Services</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="px-6 py-3 hover:bg-gray-50">About Us</a>
          <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')} className="px-6 py-3 hover:bg-gray-50">Reviews</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-6 py-3 hover:bg-gray-50">Contact</a>
          <div className="px-6 pt-4 mt-2 border-t border-gray-100">
            <button 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700">
              <PhoneCall className="w-5 h-5" />
              (555) 123-4567
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero({ onGoToContact }: { onGoToContact: () => void }) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1920" 
          alt="Modern bathroom and plumbing" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
             <CheckCircle2 className="w-4 h-4" />
            Top Rated Local Plumbers
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6">
            Premium Plumbing <br />
            <span className="text-blue-400">You Can Trust.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
            Available 24/7 for all your residential and commercial plumbing needs. 
            Licensed, insured, and committed to getting it right the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onGoToContact}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20 text-white">
              <PhoneCall className="w-5 h-5" />
              Call (555) 123-4567
            </button>
            <button 
              onClick={onGoToContact}
              className="flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors text-white border border-white/20">
              Request Service
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const TrustBadge = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-lg font-display font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

function TrustSection() {
  return (
    <section className="py-20 bg-gray-50 relative z-30 -mt-10 rounded-t-[40px]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <TrustBadge 
            icon={ShieldCheck} 
            title="Licensed & Insured" 
            description="Fully certified master plumbers to protect your home." 
          />
          <TrustBadge 
            icon={Clock} 
            title="24/7 Emergency" 
            description="We're here when you need us most, day or night." 
          />
          <TrustBadge 
            icon={ThumbsUp} 
            title="Upfront Pricing" 
            description="No hidden fees. You approve the price before we start." 
          />
          <TrustBadge 
            icon={Award} 
            title="100% Guaranteed" 
            description="We stand by our work with a rock-solid guarantee." 
          />
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800" 
              alt="Plumber at work" 
              className="relative z-10 w-full h-[400px] md:h-[500px] object-cover rounded-[2.5rem]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-blue-600 font-display font-bold text-5xl tracking-tighter">15+</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide leading-tight">Years of<br/>Experience</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold uppercase tracking-wider mb-6">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">
              More than just plumbers. <br/>We're your neighbors.
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over a decade, PlumbTrust Solutions has been providing exceptional plumbing services to our local community. We believe in doing the job right the first time, with transparent pricing and unwavering professionalism.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our team of master plumbers is continuously trained on the latest technologies and safety standards. Whether it's a minor leak or a major installation, we treat your home with the utmost respect.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-gray-900">Background Checked</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-gray-900">Clean Workspaces</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-gray-900">Fair Pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-gray-900">Fast Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesListSection({ onSelectService }: { onSelectService: (id: string) => void }) {
  return (
    <section id="services" className="py-24 bg-gray-50 relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 tracking-tight">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive plumbing solutions for your home and business. 
            Select a service below to learn more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
             <motion.div
               key={service.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: index * 0.05 }}
               onClick={() => onSelectService(service.id)}
               className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg hover:border-blue-200 cursor-pointer transition-all duration-300 hover:-translate-y-1 overflow-hidden group flex flex-col"
             >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{service.description}</p>
                  <span className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceDetailPage({ serviceId, onBack, onContact }: { serviceId: string, onBack: () => void, onContact: () => void }) {
  const service = SERVICES.find(s => s.id === serviceId);
  
  if (!service) return null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [serviceId]);

  return (
    <div className="pt-24 pb-24 min-h-screen bg-white relative z-30">
      {/* Service Hero Image */}
      <div className="w-full h-[40vh] min-h-[300px] relative mb-12">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 w-full pb-12">
             <button 
                onClick={onBack}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 font-medium text-sm uppercase tracking-wider backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full border border-white/10"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </button>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-xl rotate-3">
                  <service.icon className="w-8 h-8 -rotate-3" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight drop-shadow-md">
                  {service.title}
                </h1>
              </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl md:text-2xl text-gray-600 mb-16 leading-relaxed max-w-3xl font-light">
            {service.details}
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2rem] p-10 md:p-14 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="flex-1 relative z-10">
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-4 tracking-tight">Ready to get started?</h3>
              <p className="text-lg text-gray-600">
                Our expert technicians are standing by. Request a service online or call us directly for immediate assistance.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto shrink-0 relative z-10">
              <button 
                onClick={onContact}
                className="px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20 whitespace-nowrap"
              >
                Go to Contact Form
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-blue-900 bg-white hover:bg-blue-50 transition-colors border border-blue-200 whitespace-nowrap shadow-sm">
                <PhoneCall className="w-5 h-5 text-blue-600" />
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative z-30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Contact Info / Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col h-full justify-between"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">
              Ready to fix your plumbing <span className="text-blue-600">today?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Fill out the form to request a service appointment. Our dispatch team will contact you shortly to confirm the details.
            </p>
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Call Us 24/7</p>
                  <p className="text-xl font-bold text-gray-900">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Hours</p>
                  <p className="text-lg font-medium text-gray-900">Always Open — Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden mt-8 hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1607472586893-edb57cbceb42?auto=format&fit=crop&q=80&w=800" 
              alt="Professional plumber working" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-2">
                <ShieldCheck className="w-4 h-4" />
                Licensed Professionals
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white"
                placeholder="(555) 000-0000"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">Service Type</label>
              <select 
                id="service" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white appearance-none"
              >
                <option value="">Select a service</option>
                <option value="emergency">Emergency Repair</option>
                <option value="leak">Leak Detection & Repair</option>
                <option value="drain">Drain Cleaning</option>
                <option value="water-heater">Water Heater Services</option>
                <option value="installation">New Installation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-semibold text-gray-900 mb-2">Service Details</label>
              <textarea 
                id="details" 
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white resize-none"
                placeholder="Please describe the issue you're experiencing..."
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
            >
              Request Service
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'service'>('home');
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const handleSelectService = (id: string) => {
    setActiveServiceId(id);
    setCurrentView('service');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setActiveServiceId(null);
  };

  const handleGoToContact = () => {
    setCurrentView('home');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-200">
      <Navbar onViewHome={handleBackToHome} currentView={currentView} />
      
      {currentView === 'home' ? (
        <main>
          <Hero onGoToContact={handleGoToContact} />
          <TrustSection />
          <AboutSection />
          <ServicesListSection onSelectService={handleSelectService} />
          <ContactSection />
        </main>
      ) : (
        <main>
          {activeServiceId && (
            <ServiceDetailPage 
              serviceId={activeServiceId} 
              onBack={handleBackToHome} 
              onContact={handleGoToContact}
            />
          )}
        </main>
      )}
      
      {/* Simple Footer just to complete the page */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center gap-2 mb-4 text-white">
            <Droplet className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-display font-bold tracking-tight">PlumbTrust</span>
          </div>
          <p>© {new Date().getFullYear()} PlumbTrust Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
