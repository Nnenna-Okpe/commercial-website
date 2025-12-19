import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-white tracking-wide mb-4">
            FashionHub
          </h2>
          <p className="text-gray-400 max-w-sm">
            Elevate your style with thoughtfully curated pieces designed for
            confidence, elegance, and everyday luxury.
          </p>

          {/* Newsletter */}
          <div className="mt-6">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
              Join our newsletter
            </p>
            <div className="flex items-center border border-gray-700 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent px-3 py-2 text-sm w-full outline-none"
              />
              <button className="bg-white text-black px-4 py-2 hover:bg-gray-200 transition">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
            Shop
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Tops
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Gowns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Accessories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sale
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
            Company
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
            Support
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-gray-500">
          © {new Date().getFullYear()} FashionHub. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-white transition">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Twitter size={18} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
