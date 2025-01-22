import { FaCloud, FaChartLine, FaPlug, FaPowerOff, FaTree, FaRecycle } from 'react-icons/fa';

export default function AdditionalProjects() {
  return (
    <div
      id="additional-projects"
      className="py-16 bg-gradient-to-r from-blue-400 to-blue-500"
    >
      <div className="container mx-auto px-8">
        {/* Main Title */}
        <h2 className="text-center text-4xl font-bold py-6 mb-6 text-white">
          Additional Projects – Harnessing IoT for Sustainable Solutions
        </h2>

        {/* Main Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
          
          {/* Section 1: IoT Devices & Solar Power Backups */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Reliable IoT Power Solutions
            </h3>
            <div className="flex items-center mb-4">
              <FaPlug className="text-3xl text-blue-600 mr-4" />
              <p className="text-gray-700">
                In addition to remote fuel dispenser control and IP camera integration, our IoT startup company has developed advanced IoT devices for voltage, frequency, and lux monitoring. We also specialize in providing solar power backups designed specifically to supply IoT edge devices. Understanding the need for a consistent and sustainable power source, we offer solar power backups that ensure continuous, reliable operation of IoT devices, operating 24/7 while providing real-time data to our cloud services.
              </p>
            </div>
          </div>

          {/* Section 2: Remote Power Management */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Remote Power Management
            </h3>
            <div className="flex items-center mb-4">
              <FaPowerOff className="text-3xl text-green-600 mr-4" />
              <p className="text-gray-700">
                Our IoT platform empowers clients to manage the power supply of individual IoT devices remotely. This cutting-edge capability allows for greater energy efficiency, reducing operational costs while improving device performance.
              </p>
            </div>
          </div>

          {/* Section 3: Air Pollution Monitoring */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              IoT-Driven Environmental Solutions
            </h3>
            <div className="flex items-center mb-4">
              <FaCloud className="text-3xl text-blue-600 mr-4" />
              <p className="text-gray-700">
                One of our flagship projects is the development of an Air Pollution Monitoring System. This system uses IoT sensors to detect pollutants such as CO2, NO2, particulate matter (PM), and VOCs. Our system collects data 24/7 and transmits it securely to the cloud, where advanced data analytics offer real-time insights into air quality.
              </p>
            </div>
          </div>

          {/* Section 4: Data Analytics & Cloud Integration */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Cloud-Based Data Analytics
            </h3>
            <div className="flex items-center mb-4">
              <FaChartLine className="text-3xl text-purple-600 mr-4" />
              <p className="text-gray-700">
                Our air pollution monitoring system is built on a secure cloud-based platform that delivers actionable insights via an intuitive dashboard. Through the use of advanced machine learning algorithms, data is processed and displayed in an easy-to-understand format, empowering clients to make proactive decisions for environmental management.
              </p>
            </div>
          </div>

          {/* Section 5: Environmental Sustainability */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Committed to Environmental Sustainability
            </h3>
            <div className="flex items-center mb-4">
              <FaTree className="text-3xl text-green-600 mr-4" />
              <p className="text-gray-700">
                By leveraging IoT technology, we help organizations take immediate and informed actions to improve air quality and reduce environmental impact. Our solutions contribute to sustainability goals and are pivotal for environmental protection. Our devices are IP67-rated, ensuring they are water and dust-resistant for use in even the harshest conditions.
              </p>
            </div>
          </div>

          {/* Section 6: Call to Action */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Let’s Work Together for a Greener Future
            </h3>
            <div className="flex items-center mb-4">
              <FaRecycle className="text-3xl text-blue-600 mr-4" />
              <p className="text-gray-700">
                Our IoT platform enables clients to monitor and analyze the performance of all devices in one location, ensuring they can optimize their operations while maintaining environmental stewardship. Contact us today to learn more about how our air pollution monitoring system and other IoT solutions can help you meet your environmental goals.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
