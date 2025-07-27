import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FeatureSection from "./pages/FeatureSection";
import Workflow from "./pages/Workflow";
import Footer from "./components/Footer";
import { AboutUs } from "./pages/AboutUs";
import { Team } from "./pages/Team";
import Team1 from "./pages/Team1";
import TeamDetails from "./pages/TeamDetails";
import StudentDetails from "./pages/FacultyContributors";
import FacultyDetails from "./pages/StudentContributors";
import IndustryExpertDetails from "./pages/IndustryContributors";


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team-details/:category" element={<TeamDetails />} />



          <Route path="/team-details/students/:id" element={<StudentDetails />} />
          <Route path="/team-details/faculty/:id" element={<FacultyDetails />} />
          <Route path="/team-details/industry/:id" element={<IndustryExpertDetails />} />

          {/* <Route path="team1" element={<Team1 />} /> */}
        </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
