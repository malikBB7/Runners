import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faUsers, faIndustry } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  return (
    <div
      id="projects"
      className="py-16 bg-gradient-to-r from-blue-400 to-blue-500"
    >
      <div className="container mx-auto px-8">
        {/* Main Title for Environmental Monitoring Solutions */}
        <h2 className="text-center text-4xl font-bold py-6 mb-6 text-white">
          Environmental Monitoring Solutions
        </h2>

        {/* Main Card for Environmental Monitoring Solutions */}
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
          {/* Section 1: Features and Implemented For */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              {/* Features Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Features</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>24/7 real-time air pollution monitoring to assess environmental health</li>
                  <li>Tracking of atmospheric gases like CO2, NO2, SO2, and dust particles</li>
                  <li>Cloud-based data collection and analysis for real-time reporting and long-term trends</li>
                  <li>Instant notifications on pollution levels for timely action</li>
                </ul>
              </div>

              {/* Implemented For Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Implemented For</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Government Environmental Agencies</li>
                  <li>Urban Development Projects</li>
                  <li>Industries with environmental regulations</li>
                  <li>Research Institutions and Universities</li>
                  <li>Smart Cities and Urban Planning</li>
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
                  <p className="text-gray-600">Utilizing advanced sensors and cloud technology to monitor and analyze environmental data.</p>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr className="my-4 border-t-2 border-gray-300" />

              {/* Icon 2: Collaborative Work */}
              <div className="flex items-start mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-4xl text-green-600 mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-black">Collaborative Work</h4>
                  <p className="text-gray-600">Partnering with environmental organizations to create actionable insights from pollution data.</p>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr className="my-4 border-t-2 border-gray-300" />

              {/* Icon 3: Industry Impact */}
              <div className="flex items-start mb-4">
                <FontAwesomeIcon icon={faIndustry} className="text-4xl text-purple-600 mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-black">Industry Impact</h4>
                  <p className="text-gray-600">Revolutionizing environmental protection through real-time pollution data and monitoring systems.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className="my-8 border-t-2 border-gray-300" />
          
          {/* Section 2: Main Text */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Our Environmental Monitoring Solutions are designed to monitor and report air quality in real-time. By
              leveraging cloud-based data collection, we provide actionable insights into air pollution, helping cities
              and industries make informed decisions to improve air quality and reduce health risks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
