
import "./index.scss";
import Logo from '../../img/Logo.png';
import Abc from '../../img/Group.png';
import React from 'react'

const index = () => {
    return (
       <div className="login">
           <div className="login_left">
                <img src={Logo} alt=""/>
                <div className="login_left_nd">
                    <p className="login_left_nd_1">Tên đăng nhập*</p>
                    <input className="login_left_nd_2" type={"text"} placeholder="Username"></input>
                    <p className="login_left_nd_3">Mật khẩu*</p>
                    <input className="login_left_nd_4" type={"password"} placeholder="Password"></input>
                    <p className="login_left_nd_5">Quên mật khẩu ?</p>
                    <button className="login_left_nd_6">Đăng nhập</button>
                </div>
           </div>
            <div className="login_right">
                <img src={Abc} alt="" />
                <div className="login_right_title">
                    <p className="login_right_title_top">Hệ thống</p>
                    <p className="login_right_title_bottom">QUẢN LÝ XẾP HẠNG</p>
                </div>
            </div>
       </div>
    )
}

export default index

