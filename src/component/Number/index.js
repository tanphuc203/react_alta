import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div>
         {/* <div className=".bottom_container">
                    <table className="table_device">
                        <tr>
                            <th>Mã thiết bị</th>
                            <th>Tên thiết bị</th>
                            <th>Địa chỉ IP</th>
                            <th>Trạng thái hoạt động</th>
                            <th>Trạng thái kết nối</th>
                            <th>Dịch vụ sử dụng</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>192.168.1.10</td>   
                            <td><span  className="a"></span>Ngưng hoạt động</td>
                            <td><span  className="a"></span>Mất kết nối</td>
                            <td>Khám tim mạch, Khám mắt...</td>
                            <td><Link to="/a">Chi tiết</Link></td>
                            <td><Link to="/a">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>192.168.1.10</td>
                            <td><span  className="a"></span>Hoạt động</td>
                            <td><span  className="a"></span>Kết nối</td>
                            <td>Khám tim mạch, Khám mắt...</td>
                            <td><Link to="/a">Chi tiết</Link></td>
                            <td><Link to="/a">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>192.168.1.10</td>
                            <td><span  className="a"></span>Hoạt động</td>
                            <td><span  className="a"></span>Mất kết nối</td>
                            <td>Khám tim mạch, Khám mắt...</td>
                            <td><Link to="/a">Chi tiết</Link></td>
                            <td><Link to="/a">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>192.168.1.10</td>
                            <td><span  className="a"></span>Ngưng hoạt động</td>
                            <td><span  className="a"></span>Kết nối</td>
                            <td>Khám tim mạch, Khám mắt...</td>
                            <td><Link to="/a">Chi tiết</Link></td>
                            <td><Link to="/a">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>192.168.1.10</td>
                            <td><span  className="a"></span>Hoạt động</td>
                            <td><span  className="a"></span>Mất kết nối</td>
                            <td>Khám tim mạch, Khám mắt...</td>
                            <td><Link to="/a">Chi tiết</Link></td>
                            <td><Link to="/a">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>192.168.1.10</td>
                            <td><span  className="a"></span>Hoạt động</td>
                            <td><span  className="a"></span>Kết nối</td>
                            <td>Khám tim mạch, Khám mắt...</td>
                            <td><Link to="/a">Chi tiết</Link></td>
                            <td><Link to="/a">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>192.168.1.10</td>
                            <td><span  className="a"></span>Ngưng hoạt động</td>
                            <td><span  className="a"></span>Kết nối</td>
                            <td>Khám tim mạch, Khám mắt...</td>
                            <td><Link to="/a">Chi tiết</Link></td>
                            <td><Link to="/a">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>192.168.1.10</td>
                            <td><span  className="a"></span>Hoạt động</td>
                            <td><span  className="a"></span>Kết nối</td>
                            <td>Khám tim mạch, Khám mắt...</td>
                            <td><Link to="/a">Chi tiết</Link></td>
                            <td><Link to="/a">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>192.168.1.10</td>
                            <td><span  className="a"></span>Hoạt động</td>
                            <td><span  className="a"></span>Kết nối</td>
                            <td>Khám tim mạch, Khám mắt...</td>
                            <td><Link to="/a">Chi tiết</Link></td>
                            <td><Link to="/a">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>192.168.1.10</td>
                            <td><span  className="a"></span>Hoạt động</td>
                            <td><span  className="a"></span>Mất kết nối</td>
                            <td>Khám tim mạch, Khám mắt...</td>
                            <td><Link to="/a">Chi tiết</Link></td>
                            <td><Link to="/a">Cập nhập</Link></td>
                        </tr>
                    </table>
                    
                </div> */}
                {/* <div className="a">
                    <div className="a">
                        <div>
                            <div className="a">
                                <a>Trạng thái hoạt động</a>
                            </div>
                            <div className="a">
                                <form >
                                    <select className="a">
                                        <option className="a" value="Tất cả">Tất cả</option>
                                        <option className="a" value="Hoạt Động">Hoạt Động</option>
                                        <option className="a" value="Ngưng hoạt động">Ngưng hoạt động</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="a">
                                <a>Trạng thái kết nối</a>
                            </div>
                            <div  className="a">
                                <form >
                                    <select className="a">
                                        <option className="a" value="Tất cả">Tất cả</option>
                                        <option className="a" value="Kết nối">Kết nối</option>
                                        <option className="a" value="Mất kết nối">Mất kết nối</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="a">
                                <a>Từ khóa</a>
                            </div>
                            <div className="a">
                                <div>
                                    <form action="/action_page.php">
                                    <input className="a" type="text" placeholder="Nhập từ khóa " name="search"/>
                                    <button className="a" type="submit"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

    </div>
  )
}

export default index