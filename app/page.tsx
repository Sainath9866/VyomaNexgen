'use client';

import { motion } from "framer-motion";
import { HeroSection } from "@/components/hero-section";
import { Header } from "@/components/header";
import { AnimatedTestimonialsDemo } from "@/components/testimonials";
import { BentoGridDemo } from "@/components/bentogrid-demo";
import ExpandableCardDemo from "@/components/expandable-card-demo-standard";
import { PricingSection } from "@/components/pricing/pricing-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Fixed Header */}
      <Header />

      {/* Hero Section with top padding for fixed header */}
      <motion.div 
        id="top"
        className="mt-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
      </motion.div>
      
      <motion.div 
        id="services"
        className="my-[200px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <BentoGridDemo/>
      </motion.div>

      <motion.div
        id="portfolio"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ExpandableCardDemo/>
      </motion.div>

      <motion.div 
        id="testimonials"
        className="my-[200px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <AnimatedTestimonialsDemo/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <PricingSection/>
      </motion.div>
      
      {/* Contact Section */}
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ContactSection />
      </motion.div>
    </div>
  );
}
