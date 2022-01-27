import React from 'react';
import "./index.scss";
import Bell from "../../img/Bell.png";
import Avt from "../../img/Avt.png";
import { Link } from 'react-router-dom';

const index = () => {
    return <div className="user">
        <img src={Bell} alt="" />
        <div className="user_about">
            <Link to='/Infor'><img src={Avt} alt="" /></Link>
            <div className="user_about_person">
                <span className="user_about_person_1">Xin Chào</span>
                <span className="user_about_person_2">Lê Quỳnh Ái Vân</span>
            </div>
        </div>
    </div>

};

export default index;
