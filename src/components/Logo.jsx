const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/src/assets/Ties Legal logo.png"
        alt="Ties Legal"
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;