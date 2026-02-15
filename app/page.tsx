import AboutPage from "./components/about";
import Contact from "./components/contact";
import ExpertisePage from "./components/expertise";
import FaqPage from "./components/faq";
import LandingPage from "./components/landing";
import Latest_projectPage from "./components/latest_project";
import BlogPage from "./components/blogs";

export default function Home() {
  return (
    <>
      <div className="max-w-365 mx-auto">
        <LandingPage/>
      </div>
      <div className="max-w-365 mx-auto">
        <AboutPage/>
      </div>
      <div className="max-w-365 mx-auto">
        <Latest_projectPage/>
      </div>
      <div className="max-w-365 mx-auto">
        <ExpertisePage/>
      </div>
      <div className="max-w-365 mx-auto">
        <BlogPage/>
      </div>
      <div className="max-w-365 mx-auto">
        <FaqPage/>
      </div>
      <Contact/>
    </>
  );
}
