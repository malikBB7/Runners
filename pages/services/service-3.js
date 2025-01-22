import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faUsers, faIndustry } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  return (
    <div
      id="projects"
      className="py-16 bg-gradient-to-r from-blue-400 to-blue-500"
    >
      <div className="container mx-auto px-8">
        {/* Main Title for Security & Access Control */}
        <h2 className="text-center text-4xl font-bold py-6 mb-6 text-white">
          Security & Access Control Solutions
        </h2>

        {/* Main Card for Security & Access Control */}
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
          {/* Section 1: Features and Implemented For */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              {/* Features Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Features</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>CCTV monitoring systems for real-time surveillance and security management</li>
                  <li>RFID technology integration for secure access control across various entry points</li>
                  <li>Camera-based authorization systems for seamless identification and access granting</li>
                  <li>Comprehensive access management and tracking systems for real-time user authentication and control</li>
                </ul>
              </div>

              {/* Implemented For Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Implemented For</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Corporates and Enterprises</li>
                  <li>Public and Private Facilities</li>
                  <li>Governmental Institutions</li>
                  <li>Hospitals and Healthcare Centers</li>
                  <li>Educational Institutions</li>
                </ul>
              </div>
            </div>

            {/* Right Side: Icons with Side Headings */}
            <div className="lg:w-1/2 flex flex-col justify-between">
              {/* Icon 1: Innovative Solutions */}
              <div className="flex items-start mb-4">
                <FontAwesomeIcon icon={faCogs} className="text-4xl text-blue-600 mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-black">Innovative Solutions</h4>
                  <p className="text-gray-600">Implementing advanced CCTV systems and RFID technology for heightened security.</p>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr className="my-4 border-t-2 border-gray-300" />

              {/* Icon 2: Collaborative Work */}
              <div className="flex items-start mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-4xl text-green-600 mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-black">Collaborative Work</h4>
                  <p className="text-gray-600">Partnering with leading security firms to offer integrated access control solutions.</p>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr className="my-4 border-t-2 border-gray-300" />

              {/* Icon 3: Industry Impact */}
              <div className="flex items-start mb-4">
                <FontAwesomeIcon icon={faIndustry} className="text-4xl text-purple-600 mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-black">Industry Impact</h4>
                  <p className="text-gray-600">Enhancing physical security and access management across various sectors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className="my-8 border-t-2 border-gray-300" />
          
          {/* Section 2: Main Text */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Our Security & Access Control Solutions offer a multi-layered approach to securing premises and sensitive data.
              By integrating advanced CCTV monitoring, RFID access, and camera-based authorization systems, we provide
              cutting-edge solutions to control access and ensure safety across various organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
