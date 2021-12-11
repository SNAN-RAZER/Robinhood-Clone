import React,{useState,useEffect} from 'react'
import Chart from 'react-google-charts';



export  const LineGraph = () => {
  const [graphData, setGraphData] = useState([
    ['x',''],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],
  ]);

  const createMockData = ()=>{
    let data=[];
    let value=50;
    for(var i=0;i<366;i++){
      let date = new Date();
      date.setHours(0,0,0,0);
      date.setDate(i);
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
      data.push([date,value]);
      setGraphData([['x',''],...data])
    }
  }
   useEffect(()=>{
    createMockData()
    
   },[])

  return(
   <Chart
  width={'610px'}
  height={'200px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={graphData}
  options={{
    backgroundColor:"transparent",
    chartArea: {'backgroundColor':'transparent',
    left: "1%"
  },
    hAxis: {
      gridlines:{color:'transparent'},
      baselineColor: '#000',
         gridlineColor: '#000',
         textPosition: 'none'
    },
    vAxis: {
      gridlines:{color:'transparent'},
      baselineColor: '#000',
         gridlineColor: '#000',
         textPosition: 'none'
    },
    legend:{position: 'none'},
    axes:{
      x:{
          color:'black'
      }
    }
  }
  	

}
  rootProps={{ 'data-testid': '1' }}
/>
    
  )
 }
