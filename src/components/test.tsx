// src/components/Logo.js

import React from 'react';

const Logo = ({ className = "w-32 h-32 text-white" }: { className? : string }) => {
  return (
    <svg
      // 1. Add sizing and color classes here
      className={className}
      viewBox="0 0 220 120"
      xmlns="http://www.w3.org/2000/svg"
      // 2. Use `fill` or `stroke` with `currentColor` to inherit color
      // Or set them directly on the child elements.
    >
      {/* 3. All SVG attributes are converted to camelCase */}
      {/* 4. Removed the <style> and <rect> for background */}
      {/*    The background should be controlled by the parent div */}

      {/* Circles */}
      {/* The `fill` is set to "currentColor" so it inherits the text color */}
      <circle fill="currentColor" cx="30" cy="60" r="17" />
      <circle fill="currentColor" cx="80" cy="60" r="17" />
      <circle fill="currentColor" cx="190" cy="30" r="17" />
      <circle fill="currentColor" cx="190" cy="90" r="17" />

      {/* Connecting Lines */}
      {/* The `stroke` is set to "currentColor" */}
      <path
        stroke="currentColor"
        strokeWidth="14" // Note the camelCase
        strokeLinecap="round" // Note the camelCase
        d="M 30 60 L 80 60"
      />
      <path
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none" // Important for paths that should not be filled
        d="M 80 60 C 130 60, 140 30, 190 30"
      />
      <path
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
        d="M 80 60 C 130 60, 140 90, 190 90"
      />
    </svg>
  );
};

export default Logo;