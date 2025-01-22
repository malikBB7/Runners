export default function capabilities() {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="h-70 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-md">
          <div className="text-center px-2 py-6 pt-20">
            <h1 className="text-4xl font-semibold text-white tracking-wide drop-shadow-lg">
              Capabilities That Drive Our Success
            </h1>
          </div>
        </div>
  
        {/* Content Section */}
        <div className="container mx-auto px-6 md:px-16 py-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block pb-2">
            Key Areas of Expertise & Capabilities
          </h2>
  
          <p className="text-lg text-gray-600 leading-relaxed">
            Our success is built on a foundation of expertise, innovation, and a commitment to delivering high-quality, reliable solutions that meet the evolving needs of our clients.
          </p>
  
          {/* Data Security & Privacy Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Data Security & Privacy</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We prioritize the security and privacy of data across all our solutions, ensuring that our systems comply with industry regulations and standards. Our commitment to protecting sensitive information ensures peace of mind for our clients.
            </p>
            <ul className="list-disc ml-8 mt-4 text-gray-600">
              <li>Compliant with industry regulations</li>
              <li>Secure data protection systems</li>
              <li>Focus on regulatory requirements</li>
            </ul>
          </div>
  
          {/* Industry Experience Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Industry Experience</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our extensive experience spans across key industries, including oil & gas, manufacturing, and transportation. We understand the unique challenges these industries face and tailor our solutions to address their specific needs.
            </p>
            <ul className="list-disc ml-8 mt-4 text-gray-600">
              <li>Oil and gas sector</li>
              <li>Manufacturing</li>
              <li>Transportation</li>
            </ul>
          </div>
  
          {/* Core Strengths Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Strengths</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our core strengths lie in our ability to provide custom solutions that address the unique challenges of each industry. We focus on utilizing the latest technologies to ensure our solutions are not only reliable but also user-friendly and scalable.
            </p>
            <ul className="list-disc ml-8 mt-4 text-gray-600">
              <li>Custom solutions for industry-specific challenges</li>
              <li>Use of the latest technologies</li>
              <li>Focus on reliability and ease of use</li>
              <li>Real-time monitoring and reporting</li>
              <li>Cloud integration</li>
            </ul>
          </div>
  
          {/* Call-to-Action Button */}
          <div className="mt-6">
            <a
              href="/"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Explore Our Solutions
            </a>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 text-center py-4 mt-8">
          <p>© 2025 IoT Solutions Inc. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  