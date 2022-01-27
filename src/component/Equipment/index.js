import React from 'react';
import './index.scss';
import Bodyleft from '../list/index';
import User from '../User/index';
import Add from '../../img/Add.png';
import { Link } from 'react-router-dom';

const index = () => {
    return <div className='equipment'>
        <div className='equipment_left'>
            <Bodyleft />
        </div>
        <div className='equipment_right'>
            <div className='equipment_right_top'>
                <div className='equipment_right_title'>
                    <span className='equipment_right_title_1'>Thiết bị</span>
                    <span className='equipment_right_title_2'>{'>'}  </span>
                    <span className='equipment_right_title_3'>Danh sách thiết bị</span>
                </div>
                <div className='user'>
                    <User />
                </div>
            </div>
            <div className="equipment_right_bottom">
                Danh sách thiết bị
            </div>
            <div className='equipment_right_add'>
                <Link to='/Deviceinfor'><img src={Add} alt=''/></Link>
                <span>Thêm thiết bị</span>
            </div>

        </div>
    </div>;
};

export default index;
