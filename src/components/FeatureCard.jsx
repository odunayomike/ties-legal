import { Link } from 'react-router-dom';
import Card from './Card';

const FeatureCard = ({ icon, title, description, link }) => {
  return (
    <Card className="border border-gray-200">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#0D9488] to-[#0F766E] rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        {link && (
          <Link
            to={link}
            className="text-[#0D9488] font-semibold flex items-center gap-2 hover:gap-3 transition-all group"
          >
            Learn more
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        )}
      </div>
    </Card>
  );
};

export default FeatureCard;