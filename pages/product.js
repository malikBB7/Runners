import Image from 'next/image';

export default function Product() {
  return (
    <div className="bg-[#f5f5f5] py-16"> {/* Light beige background */}
      <div className="container mx-auto px-8">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-[#003366] mb-12"> {/* Centered Navy blue for heading */}
          Top-Notch Level Product Design and Service
        </h2>

        <div className="space-y-16">
          {/* First Section: Text on the Left, Image on the Right */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-[#003366] mb-4">
                At our IoT startup company, we are committed to providing top-notch industry-standard IoT edge devices.
              </h3>
              <p className="text-base text-[#333333]">
                We understand that IoT devices are critical to the success of our clients' operations, and that's why we invest heavily in the development and production of high-quality devices.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/product1.jpg" // Example image path
                alt="Product Design"
                width={500}
                height={300}
                className="rounded-md shadow-lg border-4 border-[#003366] object-cover"
              />
            </div>
          </div>

          {/* Second Section: Text on the Right, Image on the Left */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
            <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-[#003366] mb-4">
                Our devices are designed and built to meet the highest industry standards, ensuring reliability and efficiency.
              </h3>
              <p className="text-base text-[#333333]">
                We use only the best components and materials in our devices, and we subject them to rigorous testing to ensure that they can withstand the demands of real-world applications.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/product2.jpg" // Example image path
                alt="Product Testing"
                width={500}
                height={300}
                className="rounded-md shadow-lg border-4 border-[#003366] object-cover"
              />
            </div>
          </div>

          {/* Third Section: Text on the Left, Image on the Right */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-[#003366] mb-4">
                We also offer comprehensive support and maintenance services to ensure long-lasting performance.
              </h3>
              <p className="text-base text-[#333333]">
                We understand that IoT devices can be complex and require specialized knowledge and expertise, and that's why we have a dedicated support team to help our clients with any issues or questions they may have.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/product3.jpg" // Example image path
                alt="Support and Maintenance"
                width={500}
                height={300}
                className="rounded-md shadow-lg border-4 border-[#003366] object-cover"
              />
            </div>
          </div>

          {/* Fourth Section: Text on the Right, Image on the Left */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
            <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-[#003366] mb-4">
                Whether you need IoT devices with internet connectivity or wireless devices for off-grid applications, we have the expertise to deliver.
              </h3>
              <p className="text-base text-[#333333]">
                Our solutions are built with flexibility in mind, so you can rely on our products regardless of the environment or technical challenges.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/product4.jpg" // Example image path
                alt="IoT Solutions"
                width={500}
                height={300}
                className="rounded-md shadow-lg border-4 border-[#003366] object-cover"
              />
            </div>
          </div>

          {/* Fifth Section: Full-Width Text */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#003366] mb-4">Our Commitment to Excellence</h3>
            <p className="text-lg text-[#333333]">
              We are dedicated to providing IoT solutions that meet the highest standards of quality and performance, empowering our clients to stay ahead in a rapidly evolving technological landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
