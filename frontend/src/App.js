import { Route, Routes } from "react-router-dom";
import PlatformLaunch from "./pages/PlatformLaunch";
import Sidebar from "./components/sidebar/Sidebar";
import MarketingPlan from "./pages/MarketingPlan";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Routes>
          <Route path="/" element={<PlatformLaunch />}></Route>
          <Route path="/marketing-plan" element={<MarketingPlan />}></Route>
          <Route path="/roadmap" element={<Roadmap />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
