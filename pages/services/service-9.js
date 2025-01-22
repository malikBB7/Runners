import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faUsers, faIndustry } from '@fortawesome/free-solid-svg-icons';

export default function WarehouseManagement() {
  return (
    <div
      id="warehouse-management"
      className="py-16 bg-gradient-to-r from-green-400 to-green-500"
    >
      <div className="container mx-auto px-8">
        {/* Main Title */}
        <h2 className="text-center text-4xl font-bold py-6 mb-6 text-white">
          Warehouse Management
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
                  <li>Real-time inventory tracking and monitoring</li>
                  <li>Optimized space utilization and efficient layout</li>
                  <li>Automated stock updates with advanced WMS technology</li>
                  <li>Powerful data analytics and forecasting tools</li>
                  <li>Fully integrated order and returns management system</li>
                </ul>
              </div>

              {/* Implemented For Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-4">Implemented For</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>National and Regional Warehouses</li>
                  <li>E-commerce Distribution Centers</li>
                  <li>Product Inventory Management Systems</li>
                  <li>Logistics Providers</li>
                </ul>
              </div>
            </div>

            {/* Right Side: Icons with Side Headings */}
            <div className="lg:w-1/2 flex flex-col justify-between">
              {/* Icon 1: Innovative Solutions */}
              <div className="flex items-start mb-4">
                <FontAwesomeIcon icon={faCogs} className="text-4xl text-green-600 mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-black">Innovative Solutions</h4>
                  <p className="text-gray-600">Leveraging cutting-edge technology to streamline warehouse operations.</p>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr className="my-4 border-t-2 border-gray-300" />

              {/* Icon 2: Collaborative Work */}
              <div className="flex items-start mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-4xl text-orange-600 mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-black">Collaborative Work</h4>
                  <p className="text-gray-600">Working with industry leaders to implement efficient warehouse solutions.</p>
                </div>
              </div>

              {/* Horizontal Line */}
              <hr className="my-4 border-t-2 border-gray-300" />

              {/* Icon 3: Industry Impact */}
              <div className="flex items-start mb-4">
                <FontAwesomeIcon icon={faIndustry} className="text-4xl text-purple-600 mr-4" />
                <div>
                  <h4 className="text-xl font-bold text-black">Industry Impact</h4>
                  <p className="text-gray-600">Transforming the logistics and supply chain sector with automation and data integration.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className="my-8 border-t-2 border-gray-300" />
          
          {/* Section 2: Main Text */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              At **Runners**, we take pride in our state-of-the-art warehouse management system that ensures the smooth flow of goods through our supply chain. By integrating real-time data and automation, we optimize operations, streamline inventory control, and provide efficient fulfillment services. Our WMS solution enhances visibility, reduces errors, and supports scalable growth for our expanding business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
