import React from 'react'
import "./index.scss";
import Bodyleft from '../../list/index'
import Avt from '../../../img/Avt.png'

const index = () => {
    return (
        <div className='dashbroad'>
            <Bodyleft />
            <div className='dashbroad_container'>
                <div className='dashbroad_top'>
                    <div className='dashbroad_top_1'>
                        <span >Dashboard</span>
                    </div>
                    <div className='dashbroad_top_2'>
                        <img src={Avt} alt='' />
                        <span>Xin chào <br /><b>Lê Quỳnh Ái Vân</b></span>
                    </div>
                </div>
                <div className="dashbroad_bottom">
                    Biểu đồ cấp số
                </div>
                <div className="dashbroad_bottom_about">
                    <div className="dashbroad_bottom_about_stt">
                        <div className="dashbroad_bottom_about_stt_itemtop">
                            <img src="" alt='' ></img>
                            <p className="dashbroad_bottom_about_stt_itemttitle" >Số thứ tự đã cấp</p>
                        </div>
                        <div className="">
                            <h2 className="">4.221</h2>
                            <div className="">
                                <div className="">
                                    <img src='' alt='' ></img>
                                </div>
                                <div className="" pan>32.41%</div>
                            </div>
                        </div>
                    </div>

                    <div className="dashbroad_bottom_about_stt">
                        <div className="">
                            <img src="" alt=''></img>
                            <p className="">Số thứ tự đã sử dụng</p>
                        </div>
                        <div className="">
                            <h2 className="">3.721</h2>
                            <div className="">
                                <div className="">
                                    <img src="" alt='' ></img>
                                </div>
                                <div className="" pan>32.41%</div>
                            </div>
                        </div>
                    </div>


                    <div className="dashbroad_bottom_about_stt">
                        <div className="">
                            <img src="" alt='' ></img>
                            <p className="" >Số thứ tự đang chờ</p>
                        </div>
                        <div className="">
                            <h2 className="">468</h2>
                            <div className="">
                                <div className="">
                                    <img src="" alt='' ></img>
                                </div>
                                <div className="" pan>56,41%</div>
                            </div>
                        </div>
                    </div>


                    <div className="dashbroad_bottom_about_stt">
                        <div className="">
                            <img src="" alt=''></img>
                            <p className="" >Số thứ tự đã bỏ qua</p>
                        </div>
                        <div className="">
                            <h2 className="">32</h2>
                            <div className="">
                                <div className="">
                                    <img src='' alt='' ></img>
                                </div>
                                <div className="" pan>22,41%</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default index
