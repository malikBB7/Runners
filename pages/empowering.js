import Link from "next/link";
export default function Empowering() {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="h-70 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-md">
          <div className="text-center px-2 py-6 pt-20"> {/* Added pt-16 to push the heading down */}
            <h1 className="text-4xl font-semibold text-white tracking-wide drop-shadow-lg">
              Testimonials of Our Projects
            </h1>
          </div>
        </div>
  
        {/* Content Section */}
        <div className="container mx-auto px-6 md:px-16 py-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block pb-2">
              Key Projects & Achievements
            </h2>
  
            <p className="text-lg text-gray-600 leading-relaxed">
              One of our notable global projects includes the remote control of fuel dispensing systems at retail oil filling stations, with real-time transaction data sent to the cloud 24x7.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since our founding on February 23rd, 2022, we have been delivering cutting-edge IoT solutions through successful industry-standard automation projects.
            </p>
  
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Our platform allows for remote updates to fuel dispenser unit prices, as well as the ability to lock, unlock, and authorize dispensers remotely, bringing efficiency, cost reduction, and enhanced customer satisfaction to our clients.
            </p>
  
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              We’ve also integrated IP cameras to capture live transaction video feeds and transmit them to servers, providing full visibility of retail outlets with dashboards that display live transaction data for better decision-making.
            </p>
  
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Understanding the unique challenges and compliance needs of each industry, we prioritize data security and privacy in our solutions—especially in critical sectors like fuel dispensing.
            </p>
  
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              With a team of experts and deep experience in IoT development for industries such as oil & gas, manufacturing, and transportation, we ensure our solutions are secure, reliable, and easy to implement.
            </p>
  
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              The remote fuel dispenser control project is just one example of the innovative solutions we offer.
            </p>
  
            <div className="mt-6">
              <Link
                href="/"
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Explore Our Solutions
              </Link>
            </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 text-center py-4 mt-8">
          <p>© 2025 IoT Solutions Inc. All rights reserved.</p>
        </footer>
      </div>
    );
}
