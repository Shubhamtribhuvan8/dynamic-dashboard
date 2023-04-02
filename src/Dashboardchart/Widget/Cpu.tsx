import { useEffect, useState } from 'react';
import axios from 'axios';
import React from "react";
import { CRow, CCol, CWidgetStatsB } from "@coreui/react";
  interface Card {
    type: {
      name: string;
      subtype: string;
    };
    _id: string;
    title: string;
    value: string;
  }

const Cpu: React.FC = () => {
      const [Pieline, setData] = useState<any>([]);
      const [Cost, setCost] = useState<any>([]);
      const [Memory, setMemory] = useState<any>([]);
      useEffect(() => {
      const fetchData = async () => {
        const res: any = await axios.get<Card[]>('http://172.20.10.4:3001/api/widget/7840a682-7dcf-406a-8e3a-840150d7f9d9');//cpu
         const res1: any = await axios.get<Card[]>('http://172.20.10.4:3001/api/widget/d2c0cced-42fc-4e6f-befe-21f1faea27b6');//cost
         const res2: any = await axios.get<Card[]>('http://172.20.10.4:3001/api/widget/7f79d0e3-0f3a-4613-8743-d1e53dd8a140');//memory
        setData(res.data);
        setCost(res1.data);
        setMemory(res2.data);
      };
      fetchData();
    }, []);
  return (
    <div>      
  <CRow className="justify-content-center">
  <CCol sm={3}>
 <CWidgetStatsB
    className="mb-3"
    progress={{ color: 'success', value: Number(`${Pieline.value}`) }}
    color="light"
    title={Pieline.title}
    value={Pieline.value}
  />
</CCol>
<CCol sm={3}>
  <CWidgetStatsB
    className="mb-3"
    color="light"
    // progress={{ value: 25 }}
    progress={{value: Number(`${Memory.value}`) }}
    title={Memory.title}
    value={Memory.value}
  />
</CCol>
<CCol sm={3}>
  <CWidgetStatsB
    className="mb-3"
    color="light"
    progress={{color: 'info',value: Number(`${Cost.value}`) }}
    // progress={{color: 'info', value: 90 }}
    title={Cost.title}
    value={Cost.value}
  />
</CCol>
</CRow> 

    </div>
  );
};

export default Cpu;
