import React, { useState } from "react";

const LazyImage = ({ src, alt, className = "", wrapperClassName = "" }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      <div
        className={`absolute inset-0 bg-gray-200 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="h-12 w-12 rounded-full bg-gray-300 animate-pulse" />
      </div>
      <img
        src={src}
        alt={alt}
        className={`${className} object-cover transition duration-700 ease-in-out ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default LazyImage;
