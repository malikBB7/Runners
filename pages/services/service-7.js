import { FaSatellite, FaWifi, FaSignal, FaMobileAlt } from 'react-icons/fa';

export default function DataConnectivity() {
  return (
    <div
      id="data-connectivity"
      className="py-16 bg-gradient-to-r from-teal-400 to-teal-500"
    >
      <div className="container mx-auto px-8">
        {/* Main Title */}
        <h2 className="text-center text-4xl font-bold py-6 mb-6 text-white">
          Data Connectivity Handling for Remote Areas
        </h2>

        {/* Main Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">

          {/* Section 1: Reliable Connectivity */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Reliable Connectivity Solutions
            </h3>
            <div className="flex items-start mb-4">
              <FaSignal className="text-3xl text-blue-600 mr-4" />
              <p className="text-gray-700">
                At our IoT startup, we provide reliable connectivity solutions, even in remote areas where internet or WiFi access is limited. Our devices are equipped with cellular modems and can connect to a variety of cellular data networks, including 4G LTE and 5G.
              </p>
            </div>
          </div>

          {/* Section 2: Cellular Data Networks */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Cellular Data Networks (4G, 5G)
            </h3>
            <div className="flex items-start mb-4">
              <FaMobileAlt className="text-3xl text-green-600 mr-4" />
              <p className="text-gray-700">
                Our IoT devices are equipped to work seamlessly with cellular data networks like 4G LTE and 5G. This ensures that data collection and device control can happen in areas where WiFi is not available or reliable.
              </p>
            </div>
          </div>

          {/* Section 3: Custom Software Optimization */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Custom Software for Optimized Data Usage
            </h3>
            <div className="flex items-start mb-4">
              <FaWifi className="text-3xl text-orange-600 mr-4" />
              <p className="text-gray-700">
                We have developed custom software that optimizes cellular data usage. This allows our devices to collect data and control operations even in areas with limited or low network connectivity.
              </p>
            </div>
          </div>

          {/* Section 4: Flexible Connectivity Options */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Flexible Connectivity Options
            </h3>
            <div className="flex items-start mb-4">
              <FaSatellite className="text-3xl text-purple-600 mr-4" />
              <p className="text-gray-700">
                Our devices can adapt to different connectivity needs. Whether it's WiFi, cellular data, or even satellite connectivity, we offer a flexible approach to meet the requirements of your IoT projects in remote areas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
