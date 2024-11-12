import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import StatsSection from "./components/StatsSection/StatsSection";
import Features from "./components/FeatureSection/Features";
import Testimonial from "./components/Testimonial/Testimonial";
import Learn from "./components/Learn/Learn";
import FAQSection from "./components/FAQSection/FAQSection";
import BlogSection from "./components/BlogSection/BlogSection";
import Footer from "./components/Footer/Footer";
import CTASection from "./components/CTASection/CTASection";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StatsSection />
      <Features />
      <Testimonial />
      <Learn />
      <hr
        style={{
          borderColor: "#eaecf0",
          borderTopWidth: "1px",
          borderTopStyle: "solid",
        }}
      />
      <FAQSection />
      <hr
        style={{
          borderColor: "#eaecf0",
          borderTopWidth: "1px",
          borderTopStyle: "solid",
        }}
      />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
