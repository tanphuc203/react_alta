import React from "react";
import "./index.scss";
import Bodyleft from "../list/index";
import User from "../User/index";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="deviceupdate">
      <div className="deviceupdate_left">
        <Bodyleft />
      </div>
      <div className="deviceupdate_right">
        <div className="deviceupdate_right_top">
          <div className="deviceupdate_right_title">
            <span className="deviceupdate_right_title_1">Thiết bị</span>
            <span className="deviceupdate_right_title_2">{">"} </span>
            <span className="deviceupdate_right_title_3">
              Danh sách thiết bị
            </span>
            <span className="deviceupdate_right_title_4">{">"} </span>
            <span className="deviceupdate_right_title_5">Cập nhật thiết bị</span>
          </div>
          <div className="user">
            <User />
          </div>
        </div>
        <div className="deviceupdate_right_bottom">Quản lý thiết bị</div>
        <div className="deviceupdate_input_title">
          <p>Thông tin thiết bị</p>
        </div>
        <div className="deviceupdate_input">
          <div className="deviceupdate_input_about">
            <div className="deviceupdate_input_left">
              <p>Mã thiết bị: *</p>
              <input placeholder="KIO_01"></input>
              <p>Tên thiết bị: *</p>
              <input placeholder="Kiosk"></input>
              <p>Địa chỉ IP: *</p>
              <input placeholder="128.172.308"></input>
            </div>
            <div className="deviceinfor_input_right">
              <p>Loại thiết bị: *</p>
              <input placeholder="Kiosk"></input>
              <p>Tên đăng nhập: *</p>
              <input placeholder="Linhkyo011"></input>
              <p>Mật khẩu: *</p>
              <input placeholder="CMS"></input>
            </div>
            <div className="deviceupdate_input_bottom">
              <p>Dịch vụ sử dụng: *</p>
              <input
                className="input"
              ></input>
            </div>
          </div>
          <div className="deviceupdate_input_button">
            <Link to="/Equipment">
              <button className="deviceupdate_input_button_1">Hủy bỏ</button>
            </Link>
            <Link to="/Devicedetails">
              <button className="deviceupdate_input_button_2">
               Cập nhật
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
