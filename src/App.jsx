import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import AnalyzeAndImprove from "./Components/AnalyzeAndImprove/AnalyzeAndImprove";
import HowWeWork from "./Components/HowWeWork/HowWeWork";
import TeamMember from "./Components/TeamMember/TeamMember";
import Testimonials from "./Components/Testimonials/Testimonials";
import Brands from "./Components/Brands/Brands";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <About/>
      <Work/>
      <AnalyzeAndImprove/>
      <HowWeWork/>
      <TeamMember/>
      <Testimonials/>
      <Brands/>
      <Blogs/>
      <Footer/>
    </>
  )
}

export default App
