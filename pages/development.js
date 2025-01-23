
export default function Development() {
  return (
    <div id="development" className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <h2 className="text-5xl font-extrabold text-center mb-8 text-white">Firmware Development for Respective Programming Languages</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-200">
          We understand that every business has unique requirements and needs. That's why all of our IoT devices are fully customizable in terms of speed, accuracy, reliability, and maintenance. We work closely with our clients to understand their specific needs and develop solutions that are tailored to their requirements.
        </p>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="text-lg leading-relaxed text-gray-200">
            <h3 className="text-3xl font-semibold mb-4 text-teal-100">Customizable Solutions</h3>
            <p className="mb-4 text-gray-300">
              We understand that technology is constantly evolving, and we ensure that our IoT devices are up-to-date with the latest programming languages and firmware updates. Our team has expertise in various programming languages such as C/C++, Python, and more, ensuring that our clients have the flexibility to use the programming languages that best suit their needs.
            </p>
            <p className="mb-4 text-gray-300">
              All the developed innovative devices are designed to be easy to use and maintain, minimizing the need for ongoing maintenance and support. We also provide regular firmware updates to ensure that our devices are always up-to-date with the latest technologies and security patches.
            </p>
            <p className="mb-4 text-gray-300">
              Whether you're developing a new IoT solution or need assistance with a firmware update, our expert team is here to provide the tools and support necessary to meet your business requirements.
            </p>
          </div>

          {/* Right Column: Image Section */}
          <div className="relative">
            <img
              src="/images/development.jpg"
              alt="Firmware Development"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            <div className="absolute top-1/2 left-0 right-0 text-center text-white transform -translate-y-1/2">
              <h4 className="text-4xl font-semibold text-teal-200">Innovative, Up-to-Date Solutions</h4>
              <p className="text-lg text-gray-300">We bring cutting-edge programming languages and firmware solutions to life.</p>
            </div>
          </div>
        </div>

        {/* Key Highlights Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-semibold text-center mb-10 text-teal-100">Our Approach to Firmware Development</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* First Card */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center">
              <h4 className="text-2xl font-semibold mb-4 text-teal-600">Customizable IoT Devices</h4>
              <p className="text-gray-600">We develop IoT devices that can be customized to meet your specific needs in speed, reliability, and accuracy.</p>
            </div>
            {/* Second Card */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center">
              <h4 className="text-2xl font-semibold mb-4 text-teal-600">Programming Language Expertise</h4>
              <p className="text-gray-600">Our team is proficient in C/C++, Python, and other languages to ensure flexibility in your IoT solutions.</p>
            </div>
            {/* Third Card */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center">
              <h4 className="text-2xl font-semibold mb-4 text-teal-600">Ongoing Firmware Updates</h4>
              <p className="text-gray-600">We provide regular firmware updates to keep your devices secure and efficient with the latest features.</p>
            </div>
            {/* Fourth Card */}
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center">
              <h4 className="text-2xl font-semibold mb-4 text-teal-600">Minimal Maintenance</h4>
              <p className="text-gray-600">Our devices are designed to require minimal maintenance, offering long-lasting and reliable performance.</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-200">
            Join us in building innovative, flexible, and reliable IoT solutions with the latest firmware technologies to power your business.
          </p>
        </div>
      </div>
    </div>
  );
}
