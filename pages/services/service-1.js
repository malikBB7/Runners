import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faUsers, faIndustry } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  return (
    <div
      id="projects"
      className="py-16 bg-gradient-to-r from-blue-400 to-blue-500
"
    >
      <div className="container mx-auto px-8">
        {/* Main Title */}
        <h2 className="text-center text-4xl font-bold py-6 mb-6 text-white">
          Remote Fuel Dispenser Control System
        </h2>

        {/* Main Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
          {/* Section 1: Features and Implemented For */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              {/* Features Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Features</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Live transaction reporting</li>
                  <li>Fuel Level Detection (includes Temperature, Density, Dip Level, Water Level) for all varieties of fuels</li>
                  <li>IP camera integration for video feeds</li>
                  <li>Dashboard displays for real-time monitoring</li>
                </ul>
              </div>

              {/* Implemented For Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Implemented For</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Indian Oil Corporation Limited (IOCL)</li>
                  <li>Bharat Petroleum Corporation Limited (BPCL)</li>
                  <li>Hindustan Petroleum (HP)</li>
                  <li>IOCL Mauritius</li>
                  <li>CNG (BPCL)</li>
                  <li>Compressor Integrations (Diesel, Gas, and Electrical)</li>
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
                  <p className="text-gray-600">Cutting-edge technology for fuel dispenser control systems.</p>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr className="my-4 border-t-2 border-gray-300" />

              {/* Icon 2: Collaborative Work */}
              <div className="flex items-start mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-4xl text-green-600 mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-black">Collaborative Work</h4>
                  <p className="text-gray-600">Collaborating with industry leaders for seamless integration.</p>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr className="my-4 border-t-2 border-gray-300" />

              {/* Icon 3: Industry Impact */}
              <div className="flex items-start mb-4">
                <FontAwesomeIcon icon={faIndustry} className="text-4xl text-purple-600 mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-black">Industry Impact</h4>
                  <p className="text-gray-600">Revolutionizing the fuel dispensing sector with IoT and automation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className="my-8 border-t-2 border-gray-300" />
          
          {/* Section 2: Main Text */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Our Remote Fuel Dispenser Control System offers cutting-edge technology designed for seamless
              integration into fuel dispensing operations. With a focus on real-time monitoring, security, and
              efficiency, our solution empowers fuel management systems across industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

  