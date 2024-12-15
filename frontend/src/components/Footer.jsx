const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-gray-600 py-6 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Logo and Tagline */}
        <div className="mb-4 sm:mb-0">
          <h3 className="text-xl font-semibold">Creora</h3>
          <p className="text-gray-400 text-sm">
            AI-powered image creation made simple.
          </p>
        </div>

        {/* Quick Links */}
        <ul className="flex space-x-4 text-sm text-gray-400 mb-4 sm:mb-0">
          <li>
            <a href="#features" className="hover:text-green-400">
              Features
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-green-400">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-green-400">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © {currentYear} Creora. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
