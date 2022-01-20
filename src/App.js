import Index from "./component/login/index";
import Repassword from "./component/fpass/index";
import { Link, Route, Router, Routes } from "react-router-dom";
import Resetpass from "./component/resetpassword/index";
import Nologin from "./component/nologin/index";
import List from "./component/list/index";
import Infor from "./component/infor/index";
import Dashbroadday from "./component/Dashbroad/Dashbroadday/index";

function App() {
  return (
    <div className="app">
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Repassword" element={<Repassword />} />
          <Route path="/Resetpass" element={<Resetpass />} />
          <Route path="/Nologin" element={<Nologin />}/>
          <Route path="/List" element={<List />} />
          <Route path="/Infor" element={<Infor />} />
          <Route path="/Dashbroadday" element={<Dashbroadday />} />
          {/* //test */}
      </Routes>
    </div>        
  );
}

export default App;
