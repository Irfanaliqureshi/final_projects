import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="footer-area py-16 lg:py-20 bg-gray-800 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Footer Widget 1: About */}
          <div className="footer-widget">
            <div className="footer-logo mb-6">
              {/* Assuming a white/light version of the logo for dark background */}
              <Link href="/">
                <Image src="/assets/img/logo/logo_footer.png" alt="Footer Logo" width={150} height={40} /> 
                {/* Replace with actual footer logo path if available, or use main logo */}
              </Link>
            </div>
            <p className="text-sm mb-4">
              Empowering Sindh's youth with AI-driven career and education guidance.
            </p>
            {/* Social Icons */}
            <div className="footer-social flex space-x-3">
              {/* TODO: Add actual social links */}
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Footer Widget 2: Quick Links */}
          <div className="footer-widget">
            <h4 className="widget-title text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about"><a className="hover:text-white hover:underline">About Us</a></Link></li>
              <li><Link href="/courses"><a className="hover:text-white hover:underline">Courses</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-white hover:underline">Contact</a></Link></li>
              <li><Link href="/faq"><a className="hover:text-white hover:underline">FAQ</a></Link></li>
              <li><Link href="/privacy-policy"><a className="hover:text-white hover:underline">Privacy Policy</a></Link></li>
            </ul>
          </div>

          {/* Footer Widget 3: Resources */}
          <div className="footer-widget">
            <h4 className="widget-title text-white text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog"><a className="hover:text-white hover:underline">Blog</a></Link></li>
              <li><Link href="/scholarships"><a className="hover:text-white hover:underline">Scholarships</a></Link></li>
              <li><Link href="/career-guidance"><a className="hover:text-white hover:underline">Career Guidance</a></Link></li>
              <li><Link href="/skill-development"><a className="hover:text-white hover:underline">Skill Development</a></Link></li>
              <li><Link href="/legal-toolkit"><a className="hover:text-white hover:underline">Legal Toolkit</a></Link></li>
            </ul>
          </div>

          {/* Footer Widget 4: Contact Info */}
          <div className="footer-widget">
            <h4 className="widget-title text-white text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              {/* TODO: Update with actual contact info */}
              <li><i className="fas fa-map-marker-alt mr-2"></i>123 Education Lane, Karachi, Sindh</li>
              <li><i className="fas fa-phone mr-2"></i>+92 300 1234567</li>
              <li><i className="fas fa-envelope mr-2"></i>info@aiguidancesindh.pk</li>
            </ul>
            {/* Newsletter Signup (Optional) */}
            {/* <div className="mt-6">
              <h5 className="text-white mb-2">Subscribe Newsletter</h5>
              <form action="#" className="flex">
                <input type="email" placeholder="Your Email" className="bg-gray-700 text-white px-3 py-2 rounded-l focus:outline-none w-full" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"><i className="fas fa-paper-plane"></i></button>
              </form>
            </div> */}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | This platform is made with <i className="fa fa-heart text-red-500" aria-hidden="true"></i> by AI Guidance Sindh Team
            {/* Link back to original template source if required by license */}
            {/* | Template by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Colorlib</a> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

