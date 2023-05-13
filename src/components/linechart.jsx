import {Line} from 'react-chartjs-2';
import {Link}  from 'react-router-dom'


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export default function LineChart(){

    const data  = {
        labels:["jan","feb","march","may","jun","jul","august","septamber","octuber","november","december"],
        datasets:[{
            label:"votes",
            data:[10,43,78,34,76,90,23],
            backgroundColor:"green",
            borderColor:"red"
        }
        ],


    }
    return(
        <>
        <h1>line chart</h1>
        <Line data={data} />
        </>
    )
  }