import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p className="text-sm">&copy; copyright All rights reserved.{new Date().getFullYear()} Hirwa Tresor.</p>
    </footer>
  );
};

export default Footer;
