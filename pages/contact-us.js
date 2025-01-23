import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaClock, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfHr1oJY4KaIC13eStiGnNCfPTaTjVTHzeWcJJeiqF9q3N7ig/formResponse';
    const formBody = new URLSearchParams({
      'entry.332436408': formData.firstName,   // First Name
      'entry.1786180504': formData.lastName,    // Last Name
      'entry.1800901210': formData.email,       // Email
      'entry.1947606792': formData.phoneNumber, // Phone Number
      'entry.1831686152': formData.message      // Message
    });

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody.toString()
      });

      if (response) {
        setResponseMessage('Thank you for contacting us. We will get back to you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: ''
        });
      } else {
        setResponseMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setResponseMessage('Something went wrong. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bg-blue">
      {/* Navbar */}
      <Navbar />

      {/* Contact Us Section */}
      <div className="container mx-auto p-8 pt-20">
        {/* Four Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
            <FaClock className="text-blue-500 text-4xl" />
            <h3 className="text-lg font-semibold">Office Hours</h3>
            <p className="text-center">Mon-Fri: 10:00 AM to 6:00 PM</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
            <FaPhoneAlt className="text-green-500 text-4xl" />
            <h3 className="text-lg font-semibold">Call Us On</h3>
            <p className="text-center">+91 78934 56992</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
      <Link href="mailto:Bhuvanachand@runnerssoftware.com" className="flex flex-col items-center space-y-4">
        <FaEnvelope className="text-red-500 text-4xl" />
        <h3 className="text-lg font-semibold">Email</h3>
        <p className="text-center">Bhuvanachand@runnerssoftware.com</p>
      </Link>
    </div>


          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
  <Link href="https://www.google.com/maps/place/12%C2%B058'01.6%22N+77%C2%B032'18.7%22E/@12.9671202,77.5359481,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.9671202!4d77.538523?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-4">
    <FaMapMarkerAlt className="text-purple-500 text-4xl" />
    <h3 className="text-lg font-semibold">Location</h3>
    <p className="text-center">Our Office Location</p>
  </Link>
</div>
        </div>

        {/* Feel Free to Contact Us */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">Feel Free to Contact Us</h2>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit} 
            className="mt-8 max-w-2xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Message Box Centered */}
            <div className="sm:col-span-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                required
              ></textarea>
            </div>

            <div className="flex justify-center mt-8 sm:col-span-2">
              <button
                type="submit"
                className="bg-red-500 text-white py-3 px-8 rounded-full text-lg hover:bg-red-600 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
          
          {responseMessage && (
            <p className="mt-4 text-center text-lg text-green-600">{responseMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}
