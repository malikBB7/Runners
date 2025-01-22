import { useRouter } from 'next/router';

export default function SearchResults() {
  const router = useRouter();
  const { query } = router.query;  // Get the search query from the URL

  // Fake data for demonstration
  const content = [
    { title: 'Cloud Technology', description: 'Learn more about cloud-based solutions.' },
    { title: 'IoT Solutions', description: 'Explore our IoT technologies and products.' },
    { title: 'AI and Machine Learning', description: 'Dive into AI and its applications.' },
    { title: 'Software Development', description: 'Find out how our software solutions can help you.' },
    { title: 'Contact Us', description: 'Reach out to us for more information.' }
  ];

  // Filter content based on search query
  const filteredResults = content.filter(item => 
    item.title.toLowerCase().includes(query?.toLowerCase()) ||
    item.description.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Search Results for "{query}"</h2>
      
      {filteredResults.length > 0 ? (
        <ul className="space-y-4">
          {filteredResults.map((result, index) => (
            <li key={index} className="bg-white p-4 rounded shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{result.title}</h3>
              <p className="text-gray-600">{result.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{query}".</p>
      )}
    </div>
  );
}
