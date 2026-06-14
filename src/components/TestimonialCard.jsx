import Card from './Card';

const TestimonialCard = ({ quote, author, role, image }) => {
  return (
    <Card className="h-full">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <svg className="w-8 h-8 sm:w-12 sm:h-12 text-[#D97706] opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <blockquote className="flex-1 text-gray-700 italic text-base sm:text-lg leading-relaxed mb-6">
          "{quote}"
        </blockquote>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-[#0D9488] to-[#0F766E] rounded-full flex items-center justify-center">
            {image ? (
              <img src={image} alt={author} className="w-full h-full rounded-full object-cover" />
            ) : (
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <div>
            <p className="font-bold text-gray-900">{author}</p>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;