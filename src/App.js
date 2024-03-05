import "./App.css";
import TesSubCompt from "./components/TesSubCompt";
// import SubPage from "./components/SubPage";
import Home from "./Pages/Home";
// import Benefits from "./components/BenefitCard";
// import OurPartners from "./components/ourPartners";
// import Hero from "./components/Hero";
import PriceCard from "./components/PriceCard";
import CourseCard from "./components/CoursesCard";
// import  Testimonials from "./components/Testimonials";
import "./css/styleguide.css";
import Pricing from "./components/PriceCard";

function App() {
  return (
    <div className="App">
      {/* Hello World */}
      <PriceCard/>
      {/* <Hero /> */}
      {/* <OurPartners/> */}
      {/* <Benefits/> */}
      <Home />
      {/* <SubPage/> */}
      {/* <CourseCard/> */}
    </div>
  );
}

export default App;
