import { FaWifi, FaSatellite, FaCogs } from 'react-icons/fa';

export default function WirelessCommunication() {
  return (
    <div
      id="wireless-communication"
      className="py-16 bg-gradient-to-r from-indigo-400 to-indigo-500"
    >
      <div className="container mx-auto px-8">
        {/* Main Title */}
        <h2 className="text-center text-4xl font-bold py-6 mb-6 text-white">
          Wireless Communication Without the Use of WiFi/Internet for Data Transfer
        </h2>

        {/* Main Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">

          {/* Section 1: Wireless IoT Devices */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Wireless IoT Devices
            </h3>
            <div className="flex items-start mb-4">
              <FaWifi className="text-3xl text-blue-600 mr-4" />
              <p className="text-gray-700">
                Our IoT devices use low-power 2.4GHz wireless connectivity and communicate using the CCMP protocol, ensuring reliable and secure communication. These devices are ideal for applications where WiFi or internet connectivity is not available or practical.
              </p>
            </div>
          </div>

          {/* Section 2: Applications */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Suitable Applications
            </h3>
            <div className="flex items-start mb-4">
              <FaSatellite className="text-3xl text-green-600 mr-4" />
              <p className="text-gray-700">
                These wireless devices are perfect for remote locations, large facilities, or outdoor environments where wiring or internet connectivity is not feasible. Their wireless nature allows for flexible, scalable deployments.
              </p>
            </div>
          </div>

          {/* Section 3: Easy Deployment & Integration */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Easy Deployment & Integration
            </h3>
            <div className="flex items-start mb-4">
              <FaCogs className="text-3xl text-orange-600 mr-4" />
              <p className="text-gray-700">
                Our devices are designed for quick and easy deployment with minimal configuration required. They can be seamlessly integrated into your existing network infrastructure, ensuring smooth operations and minimal downtime.
              </p>
            </div>
          </div>

          {/* Section 4: Support & Maintenance */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Ongoing Support & Maintenance
            </h3>
            <p className="text-gray-700">
              We provide comprehensive support and maintenance services to ensure that your devices continue to perform optimally throughout their lifespan. Our team is always available to assist with troubleshooting and updates, ensuring a reliable performance.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
