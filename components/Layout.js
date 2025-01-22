import Navbar from './Navbar';
import AboutUs from './About us';

export default function Layout({ children }) {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content of the page */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* About Us section at the bottom */}
      <AboutUs />
    </div>
  );
}
