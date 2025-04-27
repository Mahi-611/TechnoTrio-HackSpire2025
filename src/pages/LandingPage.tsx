import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, MessageCircle, LineChart, Quote } from 'lucide-react';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const LandingPage = () => {
  const [heroSection, setHeroSection] = useState({
    title: '',
    subtitle: '',
    image: '',
    ctaPrimary: { text: '', link: '' },
    ctaSecondary: { text: '', link: '' },
  });
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    // Fetch landing page data from the backend
    axios.get('/api/landing/landing-data').then((response) => {
      setHeroSection(response.data.heroSection);
      setFeatures(response.data.features);
    });
  }, []);

  return (
    <AnimatedBackground className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {heroSection.title}
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-10 max-w-3xl mx-auto"
            >
              {heroSection.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to={heroSection.ctaPrimary.link} className="btn-primary">
                {heroSection.ctaPrimary.text} <ArrowRight size={18} className="ml-2 inline" />
              </Link>
              <Link to={heroSection.ctaSecondary.link} className="btn-outline">
                {heroSection.ctaSecondary.text}
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 max-w-5xl mx-auto"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={heroSection.image}
                  alt="InnerNova Dashboard Preview"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl flex items-end justify-center pb-8">
                <p className="text-white text-xl font-medium">Your journey to inner peace begins here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Nurture Your Mind</h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
              Discover the tools designed to support your mental wellness journey in a peaceful, judgment-free environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-lg"
              >
                <div className="mb-4">
                  {feature.icon === 'message-circle' && <MessageCircle size={32} className="text-primary dark:text-primary-light" />}
                  {feature.icon === 'heart' && <Heart size={32} className="text-primary dark:text-primary-light" />}
                  {feature.icon === 'line-chart' && <LineChart size={32} className="text-primary dark:text-primary-light" />}
                  {feature.icon === 'quote' && <Quote size={32} className="text-primary dark:text-primary-light" />}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-neutral-700 dark:text-neutral-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Begin Your Wellness Journey Today</h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
            Join our community of mindful individuals committed to nurturing their mental wellbeing.
          </p>
          <Link to="/dashboard" className="btn-primary">
            Start Now <ArrowRight size={18} className="ml-2 inline" />
          </Link>
        </motion.div>
      </section>
    </AnimatedBackground>
  );
};

export default LandingPage;