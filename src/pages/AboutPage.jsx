import { Scale, Handshake, Lightbulb, Target } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                TIES Legal & Advisory is a full-service law firm committed to delivering strategic, results-driven legal solutions that support innovation and business growth.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We bridge the gap between complex legal requirements and practical, people-focused advice, helping our clients operate with clarity and confidence.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide trusted legal guidance that empowers businesses and individuals to innovate, grow, and operate with confidence. We are committed to delivering excellence in every matter we handle, supporting our clients' objectives with practical, strategic advice.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0D9488] mb-2">19+</div>
                <p className="text-gray-600">Years Combined Experience</p>
              </div>
            </Card>
            <Card className="border border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0D9488] mb-2">100+</div>
                <p className="text-gray-600">Clients Served</p>
              </div>
            </Card>
            <Card className="border border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0D9488] mb-2">8+</div>
                <p className="text-gray-600">Practice Areas</p>
              </div>
            </Card>
            <Card className="border border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0D9488] mb-2">2</div>
                <p className="text-gray-600">Expert Partners</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#0D9488]">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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