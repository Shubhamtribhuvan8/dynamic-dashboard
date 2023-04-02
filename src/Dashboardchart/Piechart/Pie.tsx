import React, { useEffect, useState } from 'react';
import CanvasJSReact from "../ChartsData/canvasjs.react";
import axios from 'axios';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
interface PieChart {
    type: {
      name: string;
      subtype: string;
    };
    _id: string;
    position: number;
    title: string;
    data: {
      label: string;
      value: number;
    }[];
    colorScheme: string;
  }
  
function Pie() {
    const [Pieline, setData] = useState<any>([]);
    useEffect(() => {
      const fetchData = async () => {
        const res: any = await axios.get<PieChart[]>('http://172.20.10.4:3001/api/widget/a20fb0f9-8296-4f5a-b4c4-4c4d64c4a316');
        setData(res.data.data);
        // console.log(res.data.data);
      };
  
      fetchData();
    }, []);


    const options = {
        animationEnabled: true,
        title: {
            text: "Website Traffic Sources"
           },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}",
            dataPoints: Pieline.map((item: any) => ({ y: item.value,label: item.label }))
        }]
    };

    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
}

export default Pie;