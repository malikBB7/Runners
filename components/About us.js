import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function AboutUs() {
  return (
    <div id="about-us" className="bg-[#464747] text-white py-12 px-8">
      <div className="container mx-auto px-16">
        {/* Links Section */}
        <div className="grid grid-cols-4 gap-y-8 gap-x-16 pb-8">
          {/* About Runners Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">About Runners</h2>
            <p className="text-gray-300">
            Our goal is to provide our clients with IoT edge devices that not only meet their current 
needs but also provide long-term value and reliability. Our ongoing research and 
development always  ensures that our devices continue to meet the evolving needs of our 
clients and the industry.             </p>
          </div>

          {/* Our Services Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Our Capabilities</h2>
            <ul className="space-y-2">
              {['Software Development', 'IoT', 'Cloud Technology', 'AI', 'Web Development'].map((service, index) => (
                <li key={index} className="hover:underline hover:text-yellow-400 transition-all cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

       {/* Quick Links Section */}
<div className="space-y-4">
  <h2 className="text-2xl font-bold text-white">Quick Links</h2>
  <ul className="space-y-2">
    {['About Us', 'Data Security', 'Accessibility'].map((link, index) => (
      <li key={index}>
        <a className="hover:underline hover:text-yellow-400 transition-all">
          {link}
        </a>
      </li>
    ))}
    <li>
      <a href="/careers" className="hover:underline hover:text-yellow-400 transition-all">
        Careers
      </a>
    </li>
    <li>
      <a href="/contact-us" className="hover:underline hover:text-yellow-400 transition-all">
        Contact Us
      </a>
    </li>
  </ul>
</div>


          {/* Locate Us Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Locate Us</h2>
            <p className="text-gray-300">11, 4th Cross, 2nd Main Rd, RPC Layout, Bengaluru, Karnataka 560104</p>
            <p className="text-gray-300">+91 7893456992</p>
            <p className="text-gray-300">
              <a href="mailto:Bhuvanachand@runnerssoftware.com" className="hover:underline hover:text-yellow-400 transition-all">
              Bhuvanachand@runnerssoftware.com
              </a>
            </p>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-white my-6" />

        {/* Connect With Us Section */}
        <div className="flex justify-between items-center">
          {/* Copyright */}
          <p className="text-sm">© Runners, {new Date().getFullYear()} - All Rights Reserved.</p>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://www.youtube.com" aria-label="YouTube" className="hover:text-yellow-400 transition-all">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.Facebook.com" aria-label="Facebook" className="hover:text-yellow-400 transition-all">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.Twitter.com" aria-label="Twitter" className="hover:text-yellow-400 transition-all">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.Instagram.com" aria-label="Instagram" className="hover:text-yellow-400 transition-all">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.LinkedIn.com" aria-label="LinkedIn" className="hover:text-yellow-400 transition-all">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
