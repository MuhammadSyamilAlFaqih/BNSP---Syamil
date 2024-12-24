import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import { HomeSection } from "../Data/HomeSection";
import "../css/Home.css"

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="wrapper">
   <section id="home">
    {HomeSection.image}
  <div className="kolom">
   {HomeSection.content}
  </div>
</section>

    </div>
    <Footer/>
    </>
  )
};

export default Home;