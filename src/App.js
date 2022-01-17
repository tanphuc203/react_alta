import Index from "./component/login/index";
import Repassword from "./component/fpass/index";
import { Link, Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Repassword" element={<Repassword />} />
      </Routes>
    </div>        
  );
}
export default App;
