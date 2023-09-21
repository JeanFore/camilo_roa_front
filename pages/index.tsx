import Navbar from '../app/components/navbar/Navbar';
import HomeSection from '../app/components/sections/HomeSection';
import Footer from '../app/components/footer/Footer';

import Image from 'next/image';
import FullPage from '@/app/components/fullPage/FullPage';
function Home() {
  return (
    <div>
      <Navbar />
      
      <FullPage />

      <Footer />
    </div>
  )
}

export default Home;
