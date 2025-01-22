import Navbar from '../components/Navbar';
import { FaClock, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUsPage() {
  return (
    <div className="bg-light-blue">
      {/* Navbar */}
      <Navbar />

      {/* Contact Us Section */}
      <div className="container mx-auto p-8 pt-20"> {/* Add pt-20 for top padding */}
        {/* Four Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Office Hours Box */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
            <FaClock className="text-blue-500 text-5xl" />
            <h3 className="text-xl font-semibold">Office Hours</h3>
            <p>Mon-Fri: 10:00 AM to 6:00 PM</p>
          </div>

          {/* Call Us Box */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
            <FaPhoneAlt className="text-green-500 text-5xl" />
            <h3 className="text-xl font-semibold">Call Us On</h3>
            <p>+91 8465842601</p>
          </div>

          {/* Email Box */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
            <FaEnvelope className="text-red-500 text-5xl" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p>contact@runners.in</p>
          </div>

          {/* Location Box */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
            <FaMapMarkerAlt className="text-purple-500 text-5xl" />
            <h3 className="text-xl font-semibold">Location</h3>
            <p>Our Office Location</p>
          </div>
        </div>

        {/* Feel Free to Contact Us */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">Feel Free to Contact Us</h2>

          {/* Contact Form */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email"
              className="p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6">
            <textarea
              placeholder="Your Message"
              className="w-full p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-red-500 text-white py-3 px-6 rounded-full text-lg hover:bg-red-600 transition-all">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}