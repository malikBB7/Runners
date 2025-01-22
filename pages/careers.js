import Navbar from '../components/Navbar';
import AboutUs from '../components/About us';
import Image from 'next/image';

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />

      Careers Section
      <div className="container mx-auto p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-8 mt-8 mb-12">
          {/* Heading Section with Background Color */}
          {/* <div className="bg-blue-600 p-6 rounded-t-lg">
            <h2 className="text-4xl font-bold text-white text-center">
              Join Our Team
            </h2>
          </div> */}

          {/* Image Section with Reduced Height */}
          <div className="relative">
            <Image
              src="/images/hiring.jpg"
              width={200}
              height={100}
              alt="Hiring"
              className="w-full h-full object-cover rounded-b-lg"
            />
          </div>

          {/* Text Section */}
          <div className="text-lg text-gray-700 mt-6">
            <p>
              Our organization is driven by a deep passion for working on a diverse range of impactful projects that challenge conventions and spark innovation. We believe that every project is an opportunity to not only push boundaries but to foster growth, both within the company and within the individuals who join us. Our focus is on building dynamic teams, and we understand that hiring the right people is essential to our success. By carefully selecting individuals who share our vision for progress, we create an environment where talent can flourish. We are committed to cultivating a culture of collaboration and continuous learning, where each team member plays a key role in shaping the future of the organization while also achieving their own personal and professional growth.
            </p>
          </div>

          {/* Apply Now Button */}
          <div className="flex justify-center mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe9RZo8kcIUQsjBF2SDaqZOCP4YOZNqqgsh3DxwDx68ej8Hxg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg hover:bg-blue-600 transition-all">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <AboutUs />
    </div>
  );
}
