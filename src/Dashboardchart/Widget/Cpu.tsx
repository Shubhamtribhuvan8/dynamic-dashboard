// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

//   interface Card {
//     type: {
//       name: string;
//       subtype: string;
//     };
//     _id: string;
//     title: string;
//     value: string;
//   }

// export default function ActionAreaCard() {
//     const [Pieline, setData] = useState<any>([]);
//     useEffect(() => {
//       const fetchData = async () => {
//         const res: any = await axios.get<Card[]>('http://172.20.10.4:3001/api/widget/7840a682-7dcf-406a-8e3a-840150d7f9d9');
//         setData(res.data.title);
//         console.log(res.data.type);
//         console.log(res.data);
//       };

//       fetchData();
//     }, []);

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="https://images.unsplash.com/photo-1606258868700-a0d44a58f472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2lkZ2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }
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
    useEffect(() => {
      const fetchData = async () => {
        const res: any = await axios.get<Card[]>('http://172.20.10.4:3001/api/widget/7840a682-7dcf-406a-8e3a-840150d7f9d9');
        // const res: any = await axios.get<Card[]>('http://172.20.10.4:3001/api/widget/7840a682-7dcf-406a-8e3a-840150d7f9d9');
        // const res: any = await axios.get<Card[]>('http://172.20.10.4:3001/api/widget/7840a682-7dcf-406a-8e3a-840150d7f9d9');
        setData(res.data);
        console.log(res.data.type);
        console.log(res.data);
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
    progress={{ value: 25 }}
    title="Memory Usage"
    value="35%"
  />
</CCol>
<CCol sm={3}>
  <CWidgetStatsB
    className="mb-3"
    color="light"
    progress={{color: 'info', value: 90 }}
    title="Cost 10%"
    value="10%"
  />
</CCol>
</CRow> 

    </div>
  );
};

export default Cpu;