import logoSrc from '../assets/Ties Legal logo.png';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoSrc}
        alt="Ties Legal"
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;