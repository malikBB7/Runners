export default function Welcome() {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="relative h-70 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-md">
          <div className="text-center px-2 py-6 pt-20">
            <h1 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg">
              Welcome to Runners
            </h1>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
              Empowering businesses with next-gen IoT technologies, tailored to meet your needs.
            </p>
          </div>
        </div>
  
        {/* Content Section */}
        <div className="container mx-auto px-6 md:px-16 py-12">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block pb-2">
              About Our Organization
            </h2>
  
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to our IoT startup company, where we offer a comprehensive range of IoT 
              device-related products and services. Our company specializes in end-to-end solutions, from device 
              side R&D to server-side development, and networking essential for IoT applications.
            </p>
  
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Our team of experts can help you build scalable, secure, and reliable cloud-based IoT 
              applications, leveraging the latest technologies and best practices to meet the demands of 
              the modern connected world.
            </p>
  
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              We understand that IoT is no longer just a buzzword, but an essential part of everyday life. 
              Our IoT solutions are tailored to keep your business ahead of the competition.
            </p>
  
            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Explore Our Solutions
              </a>
            </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 text-center py-4 mt-12">
          <p>© 2025 IoT Solutions Inc. All rights reserved.</p>
        </footer>
      </div>
    );
}
