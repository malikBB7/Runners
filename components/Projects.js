export default function Projects() {
  return (
    <div
      id="projects"
      className="py-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white"
    >
      <div className="container mx-auto px-8">
        {/* Title */}
        <h2 className="text-center text-4xl font-semibold text-white mb-12">
          Safety Standards We Uphold at Runners
        </h2>

        {/* Project Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col lg:flex-row gap-8">
          {/* Left Side: Safety Information */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-semibold text-[#003366] mb-6">
              Ensuring Safety in Every IoT Solution
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At our IoT startup company, we take safety very seriously. All of our IoT edge devices come with certification and compliance with IS/IEC 60079-25: 2010 safety standards. This standard ensures that our devices are safe for use in potentially hazardous environments, such as those found in the oil and gas industry.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Compliance with safety standards is a critical component of our IoT solutions. We understand that our clients need to comply with various regulations and standards to ensure the safety of their operations and employees. By designing our devices to meet these standards, we provide our clients with the peace of mind that their operations are not only efficient but also safe.
            </p>
          </div>

          {/* Right Side: Project Highlights */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-[#003366] mb-4">
                Certified to Meet Industry Standards
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to safety is reflected in our certifications, ensuring that every device we deliver adheres to international safety regulations. This provides our clients with confidence that their IoT solutions are equipped for the most challenging and hazardous environments.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-[#003366] mb-4">
                Peace of Mind for Hazardous Environments
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand the critical importance of safety when operating in potentially hazardous environments. Our devices are built with a focus on reliability and resilience, ensuring they can function safely even in the most demanding conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
