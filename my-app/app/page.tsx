import Image from "next/image";
import About from "./components/About";
import Banner from "./components/BannerSlider";
import ShortServices from "./components/shortService";
import Courses from "./components/Courses";
import HomePageService from "./components/HomePageServices";
import Placement from "./components/Placement";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Courses />
      <ShortServices />
      <HomePageService />
       <Placement />
      <Footer />
      
    </div>

  );
}
