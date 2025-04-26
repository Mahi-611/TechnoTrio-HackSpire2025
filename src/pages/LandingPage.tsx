import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, MessageCircle, LineChart, Quote } from 'lucide-react';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const LandingPage = () => {
  const features = [
    {
      icon: <MessageCircle size={32} className="text-primary dark:text-primary-light" />,
      title: 'InnoBot Chat Assistant',
      description: 'Engage with our AI assistant designed to support your mental wellness journey with compassion and understanding.',
    },
    {
      icon: <Heart size={32} className="text-primary dark:text-primary-light" />,
      title: 'Daily Affirmations',
      description: 'Start each day with personalized positive affirmations tailored to your current emotional state.',
    },
    {
      icon: <LineChart size={32} className="text-primary dark:text-primary-light" />,
      title: 'Progress Tracking',
      description: 'Monitor your emotional wellbeing over time with intuitive visualizations and insightful analytics.',
    },
    {
      icon: <Quote size={32} className="text-primary dark:text-primary-light" />,
      title: 'Motivational Quotes',
      description: 'Draw inspiration from our curated collection of quotes that inspire peace, growth, and self-compassion.',
    },
  ];

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
                InnerNova
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-10 max-w-3xl mx-auto"
            >
              A gentle space for your thoughts to rest, reflect, and rise.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/signup" className="btn-primary">
                Get Started <ArrowRight size={18} className="ml-2 inline" />
              </Link>
              <Link to="/login" className="btn-outline">
                Sign In
              </Link>
            </motion.div>
          </div>
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
                <div className="mb-4">{feature.icon}</div>
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
          <Link to="/signup" className="btn-primary">
            Start Now <ArrowRight size={18} className="ml-2 inline" />
          </Link>
        </motion.div>
      </section>
    </AnimatedBackground>
  );
};

export default LandingPage;