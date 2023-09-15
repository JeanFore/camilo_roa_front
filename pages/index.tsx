import Navbar from '../app/components/navbar/Navbar';
import HomeSection from '../app/components/sections/HomeSection';
import Footer from '../app/components/footer/Footer';
import FullPageWrapper from '@/app/components/sections/FullPageWrapper';
function Home() {
  return (
    <div>
      <Navbar />
      <FullPageWrapper />
      
      
      {/* ... Las demás secciones */}

      <Footer />
    </div>
  )
}

export default Home;
