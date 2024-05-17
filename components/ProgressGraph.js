

// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { useSelector } from 'react-redux';
// import { selectProgressData } from '@/redux/goalSlice';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const BarChart = () => {
//   const [chartData, setChartData] = useState({
//     datasets: [],
//   });
//   const progressData = useSelector(selectProgressData);
//   const [chartOptions, setChartOptions] = useState({});

//   useEffect(() => {
//     if (progressData) {
//       const sortedDates = Object.keys(progressData).sort();
//       const labels = sortedDates.map((date) => {
//         const dateObj = new Date(date);
//         return `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
//       });
//       const data = sortedDates.map((date) => progressData[date]);

//       setChartData({
//         labels,
//         datasets: [
//           {
//             label: 'Progress',
//             data: data,
//             borderColor: 'rgb(90,146,203)',
//             backgroundColor: 'rgba(90, 146, 203, 1)',
//           },
//         ],
//       });

//       setChartOptions({
//         maintainAspectRatio: false,
//         responsive: true,
//         scales: {
//           x: {
//             type: 'category',
//             time: {
//               unit: 'day',
//               displayFormats: {
//                 day: 'MMM dd',
//               },
//             },
//           },
//           y: {
//             beginAtZero: true,
//             min: 0,
//             max: 100,
//           },
//         },
//         plugins: {
//           legend: {
//             position: 'top',
//             labels: {
//               color: 'white', // Change legend text color if needed
//             },
//           },
//         },
//       });
//     }
//   }, [progressData]);

//   return (
//     <div className="w-full max-w-[calc(100vw-16px)] h-[calc(100vh-56px)] m-auto p-4 border border-gray-300 rounded-md bg-gray-800">
//       <Bar data={chartData} options={chartOptions} />
//     </div>
//   );
// };

// export default BarChart;
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
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';
import { selectProgressData } from '@/redux/goalSlice';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const progressData = useSelector(selectProgressData);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    if (progressData) {
      const sortedDates = Object.keys(progressData).sort();
      const labels = sortedDates.map((date) => {
        const dateObj = new Date(date);
        return `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
      });
      const data = sortedDates.map((date) => progressData[date]);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Progress',
            data: data,
            borderColor: 'rgb(90,146,203)',
            backgroundColor: 'rgba(90, 146, 203, 1)',
          },
        ],
      });

      setChartOptions({
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            type: 'category',
            time: {
              unit: 'day',
              displayFormats: {
                day: 'MMM dd',
              },
            },
          },
          y: {
            beginAtZero: true,
            min: 0,
            max: 100,
          },
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: 'white', // Change legend text color if needed
            },
          },
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: 'white', // Change data label text color if needed
            formatter: (value) => `${value}`,
          },
        },
      });
    }
  }, [progressData]);

  return (
    <div className="w-full max-w-[calc(100vw-16px)] h-[calc(100vh-56px)] m-auto p-4 border border-gray-300 rounded-md bg-gray-800">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
