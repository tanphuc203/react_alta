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
import User from './component/User/index';
import Equipment from './component/Equipment/index';
import Deviceinfor from './component/Deviceinfor/index';
import Number from './component/Number/index';
import Devicedetails from './component/Devicedetails/index';
import Deviceupdate from './component/Deviceupdate/index';
import Service from './component/Servicee/index';
import Notify from './component/Notify/index';
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
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/User" element={<User />} />
          <Route path="/Equipment" element={<Equipment />} />
          <Route path="/Deviceinfor" element={<Deviceinfor />} />
          <Route path="/Number" element={<Number />} />
          <Route path="/Devicedetails" element={<Devicedetails />} />
          <Route path="/Deviceupdate" element={<Deviceupdate />} />
          <Route path="/Service" element={<Service />} />
          <Route path="Notify" element={<Notify />} />
          {/* //test */}
      </Routes>
    </div>        
  );
}

export default App;
