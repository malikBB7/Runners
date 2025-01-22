import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faUsers, faIndustry } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  return (
    <div
      id="projects"
      className="py-16 bg-gradient-to-r from-blue-400 to-blue-500"
    >
      <div className="container mx-auto px-8">
        {/* Main Title for Power Management Solutions */}
        <h2 className="text-center text-4xl font-bold py-6 mb-6 text-white">
          Power Management Solutions
        </h2>

        {/* Main Card for Power Management Solutions */}
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
          {/* Section 1: Features and Implemented For */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              {/* Features Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Features</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Solar power backup systems for uninterrupted IoT device functionality</li>
                  <li>Remote power management capabilities for efficient energy use and monitoring</li>
                  <li>Voltage, frequency, and lux monitoring for comprehensive power system analysis</li>
                  <li>24/7 cloud data transmission for real-time monitoring and data analysis</li>
                </ul>
              </div>

              {/* Implemented For Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Implemented For</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>IoT-based Smart Devices</li>
                  <li>Solar-Powered Systems in Remote Areas</li>
                  <li>Manufacturing Units and Industrial Automation</li>
                  <li>Renewable Energy Projects</li>
                  <li>Data Centers and Smart Cities</li>
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
                  <p className="text-gray-600">Harnessing solar energy to provide efficient, sustainable power solutions for IoT and remote systems.</p>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr className="my-4 border-t-2 border-gray-300" />

              {/* Icon 2: Collaborative Work */}
              <div className="flex items-start mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-4xl text-green-600 mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-black">Collaborative Work</h4>
                  <p className="text-gray-600">Partnering with renewable energy providers to create efficient power solutions for IoT applications.</p>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr className="my-4 border-t-2 border-gray-300" />

              {/* Icon 3: Industry Impact */}
              <div className="flex items-start mb-4">
                <FontAwesomeIcon icon={faIndustry} className="text-4xl text-purple-600 mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-black">Industry Impact</h4>
                  <p className="text-gray-600">Power management solutions that reduce carbon footprint and increase operational efficiency.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className="my-8 border-t-2 border-gray-300" />
          
          {/* Section 2: Main Text */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Our Power Management Solutions focus on ensuring efficient and sustainable energy usage for IoT devices and remote systems. With the help of solar-powered backup systems, we enable uninterrupted power supply, even in off-grid areas. Our comprehensive monitoring system tracks voltage, frequency, and lighting levels, ensuring optimal energy use, while 24/7 cloud data transmission provides real-time insights and analytics for improved decision-making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
