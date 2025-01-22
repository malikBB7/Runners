export default function TestingTeam() {
  return (
    <div className="bg-[#f0f4f8] py-20"> {/* Soft light blue-gray background for a fresh look */}
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold text-[#003366] mb-12">
          Meet Our Expert Team
        </h2>

        <div className="space-y-20">
          {/* First Section: Introduction to the Testing Process */}
          <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
            <h3 className="text-3xl font-semibold text-[#003366] mb-4">
              Quality and Performance at the Core
            </h3>
            <p className="text-lg text-[#555] mb-6">
              We understand that IoT devices need to work flawlessly in the field, and that's why we have invested in a comprehensive testing process that ensures our devices meet the highest standards of quality and performance. Our testing team plays a crucial role in making sure that our devices are ready for deployment and will perform consistently under real-world conditions.
            </p>
            <p className="text-lg text-[#555]">
              Our team tests every device thoroughly before release, ensuring reliability and efficiency in the field.
            </p>
          </div>

          {/* Second Section: Testing Methods */}
          <div className="bg-[#e9f1f9] p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-[#003366]">
                <h3 className="text-2xl font-semibold mb-4">Comprehensive Testing Methods</h3>
                <p className="text-lg mb-4">
                  Our testing team uses a variety of methods to ensure our devices meet industry standards. This includes:
                </p>
                <ul className="list-disc pl-6 text-lg text-[#555]">
                  <li>Unit Testing: Individual components are tested for functionality.</li>
                  <li>Integration Testing: Ensuring components work together seamlessly.</li>
                  <li>System Testing: Comprehensive testing of the entire system.</li>
                  <li>User Acceptance Testing (UAT): Verifying the product meets customer requirements.</li>
                  <li>Performance Testing: Simulating real-world conditions to assess performance under stress.</li>
                </ul>
              </div>
              <div className="text-[#003366] flex flex-col justify-between">
                <p className="text-lg ">
                  We ensure that every component of our devices is tested for peak performance. Our team collaborates closely with our development team, using detailed testing procedures to verify that each product meets our strict standards.
                </p>
                <p className="text-lg mb-28">
                  The goal is to ensure our devices can perform under various conditions and challenges, and we do this by using a comprehensive set of testing tools and real-world simulations.
                </p>
              </div>
            </div>
          </div>

          {/* Third Section: Role of the Testing Team */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-[#003366] mb-4">
              The Heart of Quality Assurance
            </h3>
            <p className="text-lg text-[#555] mb-6">
              Our testing team works hand-in-hand with the development team to identify and resolve any issues before the devices are released for deployment. They ensure that every product passes rigorous tests and meets our strict standards of excellence.
            </p>
            <p className="text-lg text-[#555]">
              We are committed to delivering flawless products that meet our clients' expectations. With the help of our experienced testers, we minimize the risks and maximize the reliability of our devices.
            </p>
          </div>

          {/* Fourth Section: Testing Tools and Technology */}
          <div className="bg-[#f7fafc] p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-[#003366]">
                <h3 className="text-2xl font-semibold mb-4">Equipped with Cutting-Edge Tools</h3>
                <p className="text-lg mb-4">
                  We use the latest tools and technologies for both automated and manual testing. Our team ensures that our devices undergo rigorous testing across multiple scenarios, from performance benchmarking to security assessments.
                </p>
                <p className="text-lg text-[#555]">
                  With the latest tools, we are able to deliver devices that are not only high-performing but also secure and reliable.
                </p>
              </div>
              <div className="text-[#003366] flex flex-col justify-between">
                <p className="text-lg mb-4">
                  Our testing tools are specifically chosen to test various scenarios, such as security, speed, and durability, ensuring that each device is ready for the most challenging environments.
                </p>
                <p className="text-lg">
                  By continuously upgrading our testing tools and processes, we ensure that our products are always one step ahead of the competition, providing optimal performance and security.
                </p>
              </div>
            </div>
          </div>

          {/* Fifth Section: Commitment to Excellence */}
          <div className="bg-[#003366] text-white p-12 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-semibold mb-4">Our Commitment to Excellence in Testing</h3>
            <p className="text-lg mb-6">
              We believe that thorough testing is the backbone of any successful IoT project. Our team is dedicated to ensuring that our devices are ready for real-world use, delivering flawless performance and exceeding our clients' expectations.
            </p>
            <p className="text-lg">
              Our focus on quality and reliability ensures that every product we ship is backed by our extensive testing and validation process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
