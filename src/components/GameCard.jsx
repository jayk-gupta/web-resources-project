function GameCard({ title, description, image, link }) {
  // Define the primary red accent color for consistency
  const RED_ACCENT = "red-600";
  const RED_ACCENT_SHADOW = "shadow-[0_0_15px_rgba(220,38,38,0.7)]";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block rounded-xl bg-gray-900 p-4 border border-gray-700
                   shadow-lg transition transform duration-300
                   // Apply deep black, red border, and red shadow on hover
                   hover:border-${RED_ACCENT} hover:${RED_ACCENT_SHADOW} hover:scale-[1.03]`}
    >
      <img
        src={image}
        alt={title}
        // Image styling with red border accent
        className={`w-full h-40 object-cover rounded-lg border border-gray-700 transition-colors duration-300 group-hover:border-${RED_ACCENT}`}
      />
      
      <h3
        // Title text color set to white with red hover glow
        className={`mt-3 text-xl font-extrabold text-white uppercase transition-colors duration-300 
                    group-hover:text-${RED_ACCENT} group-hover:drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]`}
      >
        {title}
      </h3>
      
      <p className="text-xs text-gray-400 mt-1">{description}</p>
    </a>
  );
}
export default GameCard;