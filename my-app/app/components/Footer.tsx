import React from "react";
import {
  Home,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaGoogle
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#44425A] text-white">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Menu */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Get In Touch</h3>
          <div className="w-24 h-[1px] bg-white mb-6" />
          <ul className="space-y-3 text-sm">
            {["About Us", "Our Profile", "Career", "Blogs", "Sitemap"].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 hover:text-gray-200 cursor-pointer"
                >
                  <ChevronRight size={16} /> {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Our Courses</h3>
          <div className="w-24 h-[1px] bg-white mb-6" />
          <ul className="space-y-3 text-sm">
            {[
              "Software",
              "Website",
              "Mobile Apps",
              "Bulk SMS",
              "Project Training",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 hover:text-gray-200 cursor-pointer"
              >
                <ChevronRight size={16} /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Head Office */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">News Letter</h3>
          <div className="w-24 h-[1px] bg-white mb-6" />
          <ul className="space-y-4 text-sm leading-relaxed">
            <li className="flex gap-3">
              <Home size={18} />
              2 nd. Floor, Mimec IT Park, Namkum Industrial Area,
              Lowadih Ranchi, Jharkhand - 834010
            </li>
            <li className="flex gap-3">
              <Phone size={18} /> +91-9386806214
            </li>
            <li className="flex gap-3">
              <Mail size={18} /> info@brightcodess.com
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#3d1678]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          <p className="text-center md:text-left">
            Privacy Policy | Copyright © 2019–2025 Brightcode Software Services Pvt. Ltd. All Rights Reserved
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <span className="mr-2">Get In Touch</span>
            {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaWhatsapp, FaYoutube, FaGoogle].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-9 h-9 rounded-full bg-white text-[#3d1678] flex items-center justify-center hover:scale-110 transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              )
            )}
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
