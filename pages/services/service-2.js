import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faUsers, faIndustry } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  return (
    <div
      id="projects"
      className="py-16 bg-gradient-to-r from-blue-400 to-blue-500"
    >
      <div className="container mx-auto px-8">
        {/* Main Title for POS Integration Solutions */}
        <h2 className="text-center text-4xl font-bold py-6 mb-6 text-white">
          POS Integration Solutions
        </h2>

        {/* Main Card for POS Integration Solutions */}
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
          {/* Section 1: Features and Implemented For */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              {/* Features Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Features</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Real-time transaction data processing</li>
                  <li>BLE (Bluetooth Low Energy) technology integration for seamless transaction processing</li>
                  <li>Enabling secure and efficient communication between POS systems</li>
                  <li>Real-time synchronization across multiple POS systems</li>
                </ul>
              </div>

              {/* Implemented For Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Implemented For</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>PineLabs</li>
                  <li>Fiserv</li>
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
                  <p className="text-gray-600">Leveraging BLE technology to transform POS systems.</p>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr className="my-4 border-t-2 border-gray-300" />

              {/* Icon 2: Collaborative Work */}
              <div className="flex items-start mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-4xl text-green-600 mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-black">Collaborative Work</h4>
                  <p className="text-gray-600">Working with industry leaders PineLabs and Fiserv to enhance POS systems.</p>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr className="my-4 border-t-2 border-gray-300" />

              {/* Icon 3: Industry Impact */}
              <div className="flex items-start mb-4">
                <FontAwesomeIcon icon={faIndustry} className="text-4xl text-purple-600 mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-black">Industry Impact</h4>
                  <p className="text-gray-600">Enabling seamless and secure POS transactions across various industries.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className="my-8 border-t-2 border-gray-300" />
          
          {/* Section 2: Main Text */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Our POS Integration Solutions utilize BLE technology for efficient and secure communication between POS systems.
              With real-time transaction processing, we ensure seamless synchronization and enhanced operational efficiency 
              for businesses globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
