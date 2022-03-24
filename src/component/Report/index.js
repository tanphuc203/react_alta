import React from "react";
import "./index.scss";
import Bodyleft from "../list/index";
import User from "../User/index";

const index = () => {
  return (
    <div className="report">
      <div className="report_left">
        <Bodyleft />
      </div>
      <div className="report_right">
        <div className="report_right_top">
          <div className="report_right_top_title">
            <span className="report_right_top_title_1">Báo cáo</span>
            <span className="report_right_top_title_2">{">"} </span>
            <span className="report_right_top_title_3">Lập báo cáo</span>
          </div>
          <div className="user">
            <User />
          </div>
        </div>
        <div className="report_right_content">
          <div className="report_right_content_title">
            <div className="report_right_content_title_1">
              <a>Chọn thời gian</a>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
