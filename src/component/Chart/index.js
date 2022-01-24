import React, { useState } from 'react';
import "./index.scss";
import { AreaChart, XAxis, CartesianGrid, YAxis, Tooltip, Area, LineChart, Line } from 'recharts';
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";


const Index = () => {
    const data = [
        {
            "name": "01",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "13",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "19",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "31",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ];
    const dataweek = [
        {
            "name": "Tuần 1",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "",
            "uv": 6000,
            "pv": 1398,
            "amt": 5210
        },
        {
            "name": "Tuần 2",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "",
            "uv": 9490,
            "pv": 9300,
            "amt": 9100
        },
        {
            "name": "Tuần 3",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "",
            "uv": 3390,
            "pv": 4000,
            "amt": 5500
        },
        {
            "name": "Tuần 4",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ];
    const datamonth = [
        {
            "name": "1",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "2",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "3",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "4",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "5",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "6",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "7",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        },
        {
            "name": "8",
            "uv": 6490,
            "pv": 4300,
            "amt": 8100
        },
        {
            "name": "9",
            "uv": 3790,
            "pv": 4300,
            "amt": 9100
        },
        {
            "name": "10",
            "uv": 3490,
            "pv": 9300,
            "amt": 2100
        },
        {
            "name": "11",
            "uv": 5490,
            "pv": 7300,
            "amt": 2100
        },
        {
            "name": "12",
            "uv": 9490,
            "pv": 9300,
            "amt": 9100
        }
    ];
    const [dataChart, setDatachart] = useState(data);

    const options = ["Ngày", "Tuần", "Tháng"];

    const handleDropdownValue = (e) => {
        if (e.value === "Ngày") {
            setDatachart(data);
        } else if (e.value === "Tuần") {
            setDatachart(dataweek);
        } else if (e.value === "Tháng") {
            setDatachart(datamonth);
        }
    };
    const defaultOption = options[0];

    return <div className='table'>
        <div className="table_about">
            <div className="table_about_left">
                <span className="table_about_left_1">
                    Bảng thống kê theo ngày
                </span>
                <span className="table_about_left_2">Tháng 11/2021</span>
            </div>

            <div className="table_about_right">
                <span className="table_about_right_more">Xem theo</span>
                <Dropdown
                    options={options}
                    className="chartDropdown"
                    onChange={(e) => handleDropdownValue(e)}
                    value={defaultOption}
                    placeholder="Select an option"
                />
            </div>
        </div>
        <div className='chart'>
            <AreaChart width={730} height={250} data={dataChart}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </div>

    </div>;
};

export default Index;
