import React from 'react';

const ParalProject = ({ imageUrl, title, link, description, isVideo }) => {
  return (
    <div className="relative"> {/* Added relative position to the parent div */}
      <a
        href={link} // Link to navigate to
        target="_blank" // Open in a new tab
        rel="noopener noreferrer" // Security feature to prevent access to the original window
        className="w-full h-full group"
      >
        {isVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105 relative z-0" // Ensure z-0 is on the video
          >
            <source src={imageUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105 z-0" // Ensure z-0 is on the image
          />
        )}

        <h2 className="big-text text-4xl md:text-5xl py-2 font-bold z-10">{title}</h2> {/* z-10 for title */}
        <p className="small-text text-xl md:text-2xl z-10">{description}</p> {/* z-10 for description */}
      </a>
    </div>
  );
};

export default ParalProject;
