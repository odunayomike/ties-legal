import { useState, useEffect, useRef } from 'react';
import { Scale, Handshake, Lightbulb, Target } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const AnimatedStat = ({ value, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numValue = parseInt(value);
    const duration = 1500;
    const steps = 40;
    const increment = numValue / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.min(Math.round(increment * step), numValue);
      setCount(current);
      if (step >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref}>
      <Card className="border border-gray-200">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D9488] mb-2">{count}{suffix}</div>
          <p className="text-gray-600">{label}</p>
        </div>
      </Card>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <SectionTitle
              eyebrow="ABOUT US"
              title={<>Who we <span className="text-[#0D9488]">Are</span></>}
              subtitle=""
              darkBg={true}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Your Partner For All Things Legal</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                We specialize in providing comprehensive legal solutions designed for the modern business landscape. We equip early stage innovators and disruptors with the foundational legal tools to navigate evolving industries, while offering established businesses the insight and strategy needed to scale with impact.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Clients</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our clients include tech-driven innovators, creative entrepreneurs, and high-growth SMEs navigating the complexities of digital transformation. Whether you are an individual pioneer or an organisation seeking to refine your competitive edge, we provide the legal infrastructure needed to lead with confidence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            <AnimatedStat value="10" suffix="" label="Years Combined Experience" />
            <AnimatedStat value="10" suffix="+" label="Clients Served" />
            <AnimatedStat value="8" suffix="+" label="Practice Areas" />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#0D9488]">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We maintain the highest standards of professionalism in all our work.',
                icon: <Scale className="w-12 h-12 text-[#0D9488]" />
              },
              {
                title: 'Integrity',
                description: 'We uphold ethical practices and transparency in every interaction.',
                icon: <Handshake className="w-12 h-12 text-[#0D9488]" />
              },
              {
                title: 'Innovation',
                description: 'We embrace new technologies and methodologies to serve our clients better.',
                icon: <Lightbulb className="w-12 h-12 text-[#0D9488]" />
              },
              {
                title: 'Client Focus',
                description: 'We prioritize our clients\' needs and deliver tailored solutions.',
                icon: <Target className="w-12 h-12 text-[#0D9488]" />
              }
            ].map((value, index) => (
              <Card key={index} className="border border-gray-200">
                <div className="text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
