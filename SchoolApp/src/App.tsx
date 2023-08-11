import NavigationBar from "./components/NavigationBar/NavigationBar";
import Content from "./components/Content/Content";
import BarPlot from "./components/PlotBar/PlotBar";
import Footer from "./components/Footer/Footer";
import RegistrationForm from "./components/Registration/RegistrationForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="navigation-bar">
          <NavigationBar />
        </div>
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/charts" element={<BarPlot />}></Route>
          <Route path="/signup" element={<RegistrationForm />}></Route>
        </Routes>
        <div className="footer-main">
          <Footer />
        </div>
      </Router>
    </>
  );
}
export default App;
