// pages/services/[slug].js
import { useRouter } from 'next/router'

const ServiceDetail = () => {
  const router = useRouter()
  const { slug } = router.query

  // Here, you can fetch service data based on the `slug` or use a static map
  const serviceDetails = {
    'service-1': {
      title: 'Service 1',
      description: 'A Remote Fuel Dispenser Control System enables seamless remote monitoring and management of fuel dispensing operations.',
      moreInfo: 'Service 1 details go here...',
    },
    'service-2': {
      title: 'Service 2',
      description: 'Description for Service 2.',
      moreInfo: 'Service 2 details go here...',
    },
    'service-3': {
      title: 'Service 3',
      description: 'Description for Service 3.',
      moreInfo: 'Service 3 details go here...',
    },
    // Add more services as needed
  };

  const service = serviceDetails[slug];

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold">{service.title}</h2>
      <p className="mt-4">{service.description}</p>
      <p className="mt-4">{service.moreInfo}</p>

      {/* You can add more detailed content for each service */}
    </div>
  );
}

export default ServiceDetail;
