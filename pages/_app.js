import '../styles/globals.css';
import Navbar from '../components/Navbar';
import AboutUs from '../components/About us';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Pass the isBlack prop to change navbar background color on other pages */}
      <Navbar isBlack={!isHomePage} />
      
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>

      {/* Show AboutUs only on non-home pages */}
      {!isHomePage && <AboutUs />}
    </div>
  );
}
