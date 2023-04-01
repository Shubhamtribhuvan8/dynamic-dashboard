import React from 'react';
import './App.css';
import Bars from './Dashboardchart/Bar/Bars';
import Linechart from './Dashboardchart/LineGraph/Linegraph';
import Pie from "./Dashboardchart/Piechart/Pie"
import AccessibleTable from './Dashboardchart/Stabular/Reports';
function App() {
  return (
    <div className="App">
       <Bars/>
       <br />
       <br />
       <br />
       <Pie/>
       {/* <Pie/>
       <Pie/> */}
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
