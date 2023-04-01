import React, { useState, useEffect } from 'react';
import CanvasJSReact from "../ChartsData/canvasjs.react";
import axios from 'axios';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
interface BarGraph {
    type: {
      name: string;
      subtype: string;
    };
    _id: string;
    position: number;
    title: string;
    data: {
      x: string;
      y: number;
    }[];
    xAxisLabel: string;
    yAxisLabel: string;
    color: string;
  }

const Bars = () => {
    const [barline, setData] = useState<any>([]);

    useEffect(() => {
      const fetchData = async () => {
        const res: any = await axios.get<BarGraph[]>('http://172.20.10.4:3001/api/widget/e6b5e40f-0ab4-4f22-8e4d-2dc5a6b4ad6a');
        setData(res.data.data);
        console.log(res.data.data);
      };
  
      fetchData();
    }, []);
  
    const options = {
        title: {
            text: "Basic Column Chart For DashBoard"
        },
        data: [
            {
                type: "column",
                dataPoints: barline.map((item: any) => ({ label: item.x, y: item.y }))
            }
        ]
    };

    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
}

export default Bars;
