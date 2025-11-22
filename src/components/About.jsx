import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code2, Zap, ArrowRight } from 'lucide-react';import { data } from "../data/data";
import { motion } from "framer-motion";
import { portfolioData } from "../data/data";

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="p-8 text-white"
    >
      <h2 className="text-3xl font-bold mb-3">About Me</h2>

      <p className="text-gray-200 leading-7 text-lg bg-white/10 dark:bg-black/20 p-5 rounded-xl shadow">
        {data.about}
      </p>
    </motion.section>
  );
}
