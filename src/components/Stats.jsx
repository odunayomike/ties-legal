import SectionTitle from './SectionTitle';
import StatCard from './StatCard';

const Stats = () => {
  const stats = [
    { value: '500', suffix: '+', label: 'Cases Won' },
    { value: '95', suffix: '%', label: 'Client Satisfaction' },
    { value: '1000', suffix: '+', label: 'Billable Hours' },
    { value: '50', suffix: '+', label: 'Expert Lawyers' }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <SectionTitle
            eyebrow="EFFICIENT PRACTICE"
            title="Our Track Record"
            subtitle="Delivering exceptional legal services with proven results across Nigeria."
            centered
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="mt-10 sm:mt-16 flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/20 to-transparent rounded-2xl sm:rounded-3xl transform -rotate-3"></div>
            <div className="relative bg-gradient-to-br from-[#F5E6D3] to-[#E6D5C3] rounded-2xl sm:rounded-3xl p-6 sm:p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <div className="w-36 h-48 sm:w-48 sm:h-64 bg-gradient-to-br from-[#0D9488] to-[#0F766E] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl">
                  <svg className="w-16 h-16 sm:w-24 sm:h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;