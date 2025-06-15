
import { Wrench, Phone, Mail, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand-blue-950 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <NavLink to="/" className="flex items-center gap-2 font-bold text-2xl mb-4">
              <Wrench className="h-7 w-7 text-brand-yellow-400" />
              <span className="font-heading">WEFIX LTD</span>
            </NavLink>
            <p className="text-brand-blue-200">Your trusted partner for fast, reliable repair and maintenance services.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-brand-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="hover:text-brand-yellow-400 transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-brand-yellow-400 transition-colors">About Us</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-brand-yellow-400 transition-colors">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-brand-yellow-400 mb-4">Contact Info</h3>
            <ul className="space-y-3 text-brand-blue-200">
              <li className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-1 text-brand-yellow-400" /><span>123 Fixit Lane, Repairtown, RT 54321</span></li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-brand-yellow-400" /><a href="tel:123-456-7890" className="hover:text-brand-yellow-400 transition-colors">123-456-7890</a></li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-brand-yellow-400" /><a href="mailto:contact@wefixltd.com" className="hover:text-brand-yellow-400 transition-colors">contact@wefixltd.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-brand-yellow-400 mb-4">Emergency Response</h3>
            <p className="text-brand-blue-200">Available 24/7 for all your emergency needs.</p>
            <p className="text-2xl font-bold text-brand-yellow-400 mt-2">24/7</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-blue-900 text-center text-brand-blue-300">
          <p>&copy; {new Date().getFullYear()} WEFIX LTD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
