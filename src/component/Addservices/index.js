import React from "react";
import "./index.scss";
import Bodyleft from "../list/index";
import User from "../User/index";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="addservices">
      <div className="addservices_left">
        <Bodyleft />
      </div>
      <div className="addservices_right">
        <div className="addservices_right_top">
          <div className="addservices_right_title">
            <span className="addservices_right_title_1">Dịch vụ</span>
            <span className="addservices_right_title_2">{">"} </span>
            <span className="addservices_right_title_3">Danh sách dịch vụ</span>
            <span className="addservices_right_title_4">{">"} </span>
            <span className="addservices_right_title_5">Thêm dịch vụ</span>
          </div>
          <div className="user">
            <User />
          </div>
        </div>
        <div className="addservices_right_bottom">Quản lý dịch vụ</div>
        <div className="addservices_input_title">
          <p>Thông tin dịch vụ</p>
        </div>
        <div className="addservices_input">
          <div className="addservices_input_about">
            <div className="addservices_input_left">
              <p>Mã dịch vụ: *</p>
              <input className="input1" placeholder="201"></input>
              <p>Tên dịch vụ: *</p>
              <input className="input1" placeholder="Khám tĩnh mạch"></input>
            </div>
            <div className="addservices_input_right">
              <p>Mô tả: </p>
              <input className="input2" placeholder="Mô tả dịch vụ"></input>
            </div>
            <div className="addservices_input_bottom">Quy tắc cấp số</div>
          </div>
          <div className="addservices_input_button">
            <Link to="/Service">
              <button className="addservices_input_button_1">Hủy</button>
            </Link>
            <Link to="">
              <button className="addservices_input_button_2">
                Thêm dịch vụ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
