import React from 'react';
import './App.css';
import Bars from './Dashboardchart/Bar/Bars';
import Linechart from './Dashboardchart/LineGraph/Linegraph';
import Pie from "./Dashboardchart/Piechart/Pie"
import AccessibleTable from './Dashboardchart/Stabular/Reports';
import Cpu from './Dashboardchart/Widget/Cpu';
import List from './Dashboardchart/List/List';
function App() {
  return (
    <div className="App">
       <br/>
       <br/>
      <Cpu/>
      <br/>
      <br/>
      <br/>
      <List/>
      <br/>
      <br/>
      <br/>
       <Bars/>
       <br />
       <br />
       <br />
       <Pie/>
       <br />
       <br />
       <Linechart/>
       <br/>
       <br/>
       <br/>
      <AccessibleTable/>
      
    </div>
  );
}

export default App;
