import Navbar from '../app/components/navbar/Navbar';
import HomeSection from '../app/components/sections/HomeSection';
import Footer from '../app/components/footer/Footer';
function Home() {
  return (
    <div>
      <Navbar />
      
      <HomeSection />
      
      {/* ... Las demás secciones */}

      <Footer />
    </div>
  )
}

export default Home;
