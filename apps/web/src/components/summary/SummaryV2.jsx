'use client';

import { useContext, useEffect, useRef } from 'react';

import { ThemeContext } from '@/providers/theme-provider';

import LineChart from '../chart/LineChart';
import DateFilter from '../forms/DateFilter';

const createGradient = (ctx) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 450);
  gradient.addColorStop(0, 'rgba(34, 197, 94,0.41)');
  gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0)');
  return gradient;
};

function SummaryV2() {
  const { theme } = useContext(ThemeContext);
  const chartRef = useRef(null);

  useEffect(() => {
    // // Get canvas context and create gradient
    const ctx = chartRef?.current?.getContext('2d')?.chart.ctx;

    if (ctx) {
      const gradient = createGradient(ctx);
      // Update chart data and options
      chartRef.current.data.datasets[0].backgroundColor = gradient;
      chartRef.current.update();
    }
  }, []);
  let month = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const plugins = [
    {
      beforeDatasetsDraw(chart) {
        chart.ctx.shadowColor = 'rgba(37, 99, 235, 0.14)';
        chart.ctx.shadowBlur = 8;
      },
      afterDatasetsDraw(chart) {
        chart.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
        chart.ctx.shadowBlur = 0;
      },
    },
  ];
  const data = {
    labels: month,
    datasets: [
      {
        label: 'Signed',
        data: [65, 75, 65, 55, 75, 55, 45, 65, 75, 65, 85, 75],
        borderColor: '#22C55E',
        pointBorderColor: '#ffffff',
        pointBackgroundColor: '#22C55E',
        pointBorderWidth: 4,
        borderWidth: 2,
        fill: true,
        fillColor: '#fff',
        tension: 0.4,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: theme === '' ? 'black' : 'white',
        },
        grid: {
          color: theme === '' ? 'rgba(243 ,246, 255 ,1)' : 'rgba(34,38,46,1)',
        },
        gridLines: {
          zeroLineColor: 'transparent',
        },
      },
      y: {
        beginAtZero: true,
        border: { dash: [5, 5] },
        grid: {
          color: theme === '' ? 'rgba(243 ,246, 255 ,1)' : 'rgba(34,38,46,1)',
          borderDashOffset: 2,
        },
        gridLines: {
          zeroLineColor: 'transparent',
        },
        ticks: {
          color: theme === '' ? 'black' : 'white',
          callback(value) {
            return `${value}K `;
          },
        },
      },
    },

    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: false,
        text: 'Visitor: 2k',
      },
      // tooltip: {
      //   enabled: false,
      // },
    },
    elements: {
      point: {
        radius: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0],
        hoverRadius: 6,
      },
    },
  };

  return (
    <div className="xl:w-66 dark:bg-darkblack-600 flex w-full flex-col justify-between rounded-lg bg-white px-6 py-3">
      <div className="border-bgray-300 mb-2 flex items-center justify-between border-b pb-2">
        <h3 className="text-bgray-900 text-xl font-bold sm:text-2xl dark:text-white">
          Summary
        </h3>
        <div className="hidden items-center space-x-[28px] sm:flex">
          <div className="flex items-center space-x-2">
            <div className="bg-success-300 h-3 w-3 rounded-full"></div>
            <span className="text-bgray-700 dark:text-bgray-50 text-sm font-medium">
              Signed
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-orange h-3 w-3 rounded-full"></div>
            <span className="text-bgray-700 dark:text-bgray-50 text-sm font-medium">
              Lost
            </span>
          </div>
        </div>
        <DateFilter
          options={['Jan 11 - Jan 16', 'Jan 12 - Jan 16', 'Jan 13 - Jan 16']}
        />
      </div>
      <div className="h-[255px] w-full">
        {/* <canvas id="revenueFlowLine" height="255"></canvas> */}
        <LineChart
          plugins={plugins}
          dataSet={data}
          option={options}
          refer={chartRef}
        />
      </div>
    </div>
  );
}

export default SummaryV2;
