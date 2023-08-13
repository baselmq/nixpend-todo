import { Route, Routes } from "react-router-dom";
import PlatformLaunch from "./pages/PlatformLaunch";
import Sidebar from "./components/sidebar/Sidebar";
import MarketingPlan from "./pages/MarketingPlan";

function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Routes>
          <Route path="/" element={<PlatformLaunch />}></Route>
          <Route path="/marketing-plan" element={<MarketingPlan />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
