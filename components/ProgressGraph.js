
// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';
// import 'chartjs-adapter-date-fns'; // Import the date adapter
// import { useSelector } from 'react-redux';
// import { selectProgressData } from '@/redux/goalSlice';

// interface ChartData {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: number[];
//     backgroundColor: string;
//     borderColor: string;
//     borderWidth: number;
//   }[];
// }

// function ProgressChart() {
//   const progressData = useSelector(selectProgressData);
//   const [chartData, setChartData] = useState<ChartData>({
//     labels: [],
//     datasets: [
//       {
//         label: 'Progress',
//         data: [],
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   });

//   useEffect(() => {
//     if (progressData) {
//       const sortedDates = Object.keys(progressData).sort(); // Sort dates chronologically
//       const labels = sortedDates.map((date) => {
//         const dateObj = new Date(date);
//         return `${dateObj.getMonth() + 1}/${dateObj.getDate()}`; // Format date as "month/date"
//       });
//       const data = sortedDates.map((date) => progressData[date]);
//       console.log(labels);
//       console.log(data);
      
//       setChartData({
//         labels,
//         datasets: [
//           {
//             label: 'Progress',
//             data,
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//           },
//         ],
//       });
//       console.log(chartData);
      
//     }
//   }, [progressData]);

//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const chartInstance = useRef<Chart | null>(null);
//   useEffect(() => {
//     if (canvasRef.current && chartData) {
//       const ctx = canvasRef.current.getContext('2d');
//       if (ctx) {
//         // Destroy existing chart instance
//         if (chartInstance.current) {
//           chartInstance.current.destroy();
//         }
//         // Create new chart instance
//         chartInstance.current = new Chart(ctx, {
//           type: 'line',
//           data: chartData,
//           options: {
//             responsive: true,
//             scales: {
//               x: {
//                 type: 'time',
//                 time: {
//                   unit: 'day',
//                   displayFormats: {
//                     day: 'MMM dd',
//                   },
//                 },
//               },
//               y: {
//                 beginAtZero: true,
//                 min: 0,
//                 max: 100,
//               },
//             },
//           },
//         });
//       }
//     }
//   }, [chartData]);


//   return (
//     <div className="chart-container">
//       <canvas ref={canvasRef} />
//     </div>
//   );
// }

// export default ProgressChart;

// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';
// import 'chartjs-adapter-date-fns'; // Import the date adapter
// import { useSelector } from 'react-redux';
// import { selectProgressData } from '@/redux/goalSlice';

// interface ChartData {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: number[];
//     backgroundColor: string;
//     borderColor: string;
//     borderWidth: number;
//   }[];
// }

// function ProgressChart() {
//   const progressData = useSelector(selectProgressData);
//   const [chartInstance, setChartInstance] = useState<Chart | null>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     let newChartInstance: Chart | null = null;

//     if (progressData && canvasRef.current) {
//       const sortedDates = Object.keys(progressData).sort();
//       const labels = sortedDates.map((date) => {
//         const dateObj = new Date(date);
//         return `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
//       });
//       const data = sortedDates.map((date) => progressData[date]);

//       const ctx = canvasRef.current.getContext('2d');
//       if (ctx) {
//         // Destroy existing chart instance
//         if (chartInstance) {
//           chartInstance.destroy();
//         }

//         // Create new chart instance
//         newChartInstance = new Chart(ctx, {
//           type: 'bar',
//           data: {
//             labels,
//             datasets: [
//               {
//                 label: 'Progress',
//                 data,
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 1,
//               },
//             ],
//           },
//           options: {
//             responsive: true,
//             scales: {
//               x: {
//                 type: 'time',
//                 time: {
//                   unit: 'day',
//                   displayFormats: {
//                     day: 'MMM dd',
//                   },
//                 },
//               },
//               y: {
//                 beginAtZero: true,
//                 min: 0,
//                 max: 100,
//               },
//             },
//           },
//         });
//       }
//     }

//     // Cleanup function to destroy the chart instance when component unmounts or when progressData changes
//     return () => {
//       if (newChartInstance) {
//         newChartInstance.destroy();
//       }
//     };
//   }, [progressData]);

//   return (
//     <div className="chart-container">
//       <canvas ref={canvasRef} />
//     </div>
//   );
// }

// export default ProgressChart;
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { useSelector } from 'react-redux';
import { selectProgressData } from '@/redux/goalSlice';

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const progressData = useSelector(selectProgressData);
  const [chartOptions, setChartOptions] = useState({});

      

  useEffect(() => {
    let data;
    let labels;
    if (progressData) {
      const sortedDates = Object.keys(progressData).sort();
       labels = sortedDates.map((date) => {
        const dateObj = new Date(date);
        return `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
      });
      data = sortedDates.map((date) => progressData[date]);}
    setChartData({
        labels: labels,
        datasets: [
            {
                data:data ,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235, 0.4',
              }, 
        ]
    })
    setChartOptions({
        // plugins: {
        //     // legend: {
        //     //     position: 'top',
        //     // },
           
        // },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [progressData])

  return (
    <>
      <div className='w-full max-w-[calc(100vw-16px)] h-[calc(100vh-56px)] m-auto p-4 border border-gray-300 rounded-md bg-gray-800'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;

/* styles.module.css or your preferred CSS file */

