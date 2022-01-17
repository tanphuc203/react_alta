import Index from "./component/login/index";
import Repassword from "./component/fpass/index";
import { Link, Route, Router, Routes } from "react-router-dom";
import Resetpass from "./component/resetpassword/index";
import Nologin from "./component/nologin/index";
import Infor from "./component/list/index";
function App() {
  return (
    <div className="app">
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Repassword" element={<Repassword />} />
          <Route path="/Resetpass" element={<Resetpass />} />
          <Route path="/Nologin" element={<Nologin />}/>
          <Route path="/Infor" element={<Infor />} />
          
          {/* //test */}
      </Routes>
    </div>        
  );
}

export default App;
