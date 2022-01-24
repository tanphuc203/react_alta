import Index from "./component/login/index";
import Repassword from "./component/fpass/index";
import { Link, Route, Router, Routes } from "react-router-dom";
import Resetpass from "./component/resetpassword/index";
import Nologin from "./component/nologin/index";
import List from "./component/list/index";
import Infor from "./component/infor/index";
import Dashbroadday from "./component/Dashbroad/Dashbroadday/index";
import Dashbroadright from "./component/Dashbroad/Dashbroadright/index";
import Chart from "./component/Chart/index";
import Calendar from './component/Calendar/index';
;


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
          <Route path="/Dashbroadright" element={<Dashbroadright/>} />
          <Route path="/Chart" element={<Chart />} />
          <Route path="Calendar" element={<Calendar />} />
          {/* //test */}
      </Routes>
    </div>        
  );
}

export default App;
