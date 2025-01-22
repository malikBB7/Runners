// components/Services.js
import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
  const services = [
    { title: 'Remote Fuel Dispenser Control System', text: 'A Remote Fuel Dispenser Control System...', image: '/images/serv1.jpg', slug: 'service-1' },
    { title: 'POS Integration Solutions', text: 'An Integrated Solutions for various...', image: '/images/service2.png', slug: 'service-2' },
    { title: 'Security & Access Control', text: 'Accessing and controllinf systems through...', image: '/images/service3.jpg', slug: 'service-3' },
    { title: 'Environmental Monitoring Solutions', text: '24/7 Real-Time Monitoring solutions...', image: '/images/service4.jpg', slug: 'service-4' },
    { title: 'Power Management Solutions', text: 'Backup systems data and remote power manag...', image: '/images/servic5.jpg', slug: 'service-5' },
    { title: 'Wireless Communication', text: 'A Wireless communication without the use of wifi/i...', image: '/images/service6.jpg', slug: 'service-6' },
    { title: 'Data Connectivity Handling', text: 'A Data Connectivity handling for remote areas ...', image: '/images/service7.jpg', slug: 'service-7' },
    { title: 'Warehouse Managament', text: 'advanced warehouse management systems to innovative sol..', image: '/images/service9.jpg', slug: 'service-9' },
    { title: 'Additional Projects', text: 'Our organization is involved in also various projects ...', image: '/images/service8.jpg', slug: 'service-8' },
  ];

  return (
    <div className="bg-black py-20 px-8" id="services">
      <h2 className="text-4xl font-bold text-white mb-12 text-left">Our Services</h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 container mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-transparent shadow-md rounded-md overflow-hidden transform hover:scale-105 transition-transform">
            <div className="relative group">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover transition-transform transform group-hover:scale-110"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              <p className="text-gray-400">{service.text}</p>

              {/* Link to Service Detail Page */}
              <Link href={`/services/${service.slug}`} passHref>
                <span className="mt-4 inline-block text-yellow-500 font-bold hover:text-red-500 transition-colors">
                  Learn More → 
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
