import React, { useEffect, useRef, useState } from 'react';
import CanvasJSReact from '../ChartsData/canvasjs.react';
import axios from 'axios';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface IData {
  position: number;
  title: string;
  data: Array<{
    x: string;
    y: number;
  }>;
  xAxisLabel: string;
  yAxisLabel: string;
  color: string;
}

const Linechart: React.FC = () => {
  const [linedata, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await axios.get<IData[]>('http://172.20.10.4:3001/api/widget/8d6ba3a3-02a6-4f2a-a0ea-5f6d7f89a38a');
      setData(res.data.data);
      console.log(res.data.data);
    };

    fetchData();
  }, []);

  const chartRef = useRef<typeof CanvasJSChart | null>(null);

  useEffect(() => {
    if (chartRef.current && linedata.length > 0) {
      chartRef.current.render();
    }
  }, [linedata]);

  const options = {
    animationEnabled: true,
    theme: "light1",
    title:{
      text: "Bounce Rate by Week of Year"
    },
    axisY: {
      title: "Bounce Rate",
      suffix: "%"
    },
    axisX: {
      title: "Week of Year",
      prefix: "W",
      interval: 2
    },
    data: [{
      type: "line",
      toolTipContent: "Week {x}: {y}%",
       dataPoints: linedata.map((item: any) => ({ x: item.x, y: item.y }))
    }]
  };

  return (
    <div>
      {linedata.length > 0 && <CanvasJSChart options={options} onRef={(ref: any) => chartRef.current = ref} />}
    </div>
  );
};

export default Linechart;
