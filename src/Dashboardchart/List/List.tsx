import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CListGroup, CListGroupItem } from '@coreui/react'
interface ListType {
    type: {
    name: string;
    subtype: string;
    };
    _id: string;
    title: string;
    items: Array<string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined>;
    }
export default function List() {
    const [list, setlist] = useState<any>([]);
    useEffect(() => {
    const fetchData = async () => {
      const res: any = await axios.get<ListType[]>('http://172.20.10.4:3001/api/widget/74d3d3a7-92a1-4c8a-99f8-836ef1336c12');
      setlist(res.data.items);
    //   console.log(res.data.type);
      console.log(res.data.items[0]);
    };
    fetchData();
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center">
    <CListGroup className="text-start w-100">
      <CListGroupItem active className="w-50">Random List</CListGroupItem>
      {list.map((e: { items: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })=>{
        return (<CListGroupItem className="w-50">{e.items}</CListGroupItem>)
      })}
    </CListGroup>
  </div>  
  )
}


