import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-900 py-8">
      <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 filter grayscale opacity-50">
        <div class="w-16 h-16 bg-blue-500 rounded-md rotate-2">
          <img
            className="w-full h-full"
            src="https://cdn.worldvectorlogo.com/logos/messi-logo-1.svg"
            alt=""
          />
        </div>
        <div class="w-20 h-20 bg-red-500 rounded-md -rotate-3 translate-y-2">
          <img
            className="w-full h-full"
            src="https://cdn.worldvectorlogo.com/logos/wilson.svg"
            alt=""
          />
        </div>
        <div class="w-14 h-14 bg-yellow-400 rounded-md rotate-1">
          <img
            className="w-full h-full"
            src="https://cdn.worldvectorlogo.com/logos/mcdonalds-7.svg"
            alt=""
          />
        </div>
        <div class="w-18 h-18 bg-green-500 rounded-md -rotate-6 translate-y-3">
          <img
            className="w-full h-full"
            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/092021/world_padel_tour_logo.jpg?HzkB5R165jJ1rcITWAyZtsFm7fnT2jq7&itok=81LIlEMS"
            alt=""
          />
        </div>
        <div class="w-20 h-20 bg-purple-500 rounded-md rotate-4">
          <img
            className="w-full h-full"
            src="https://cdn.worldvectorlogo.com/logos/aws-2.svg"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
