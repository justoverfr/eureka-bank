'use client';

import { useContext } from 'react';

import { ThemeContext } from '@/providers/theme-provider';

import BarChart from '../chart/BarChart';
import DateFilter from '../forms/DateFilter';

function Summary() {
  let { theme } = useContext(ThemeContext);
  let revenueFlowBarmonth = [
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
  let revenueDark = [
    {
      label: 'Dataset 1',
      data: [65, 75, 65, 55, 75, 55, 45, 65, 75, 65, 85, 75],
      backgroundColor: [
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(255, 120, 75, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
      ],
      borderRadius: 3,
    },
    {
      label: 'Dataset 2',
      data: [70, 80, 70, 65, 65, 65, 60, 70, 80, 70, 80, 65],
      backgroundColor: [
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(74, 222, 128, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
        'rgba(42, 49, 60, 1)',
      ],
      borderRadius: 3,
    },
  ];
  let revenueLight = [
    {
      label: 'Dataset 1',
      data: [65, 75, 65, 55, 75, 55, 45, 65, 75, 65, 85, 75],
      backgroundColor: [
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(255, 120, 75, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
      ],
      borderRadius: 3,
    },
    {
      label: 'Dataset 2',
      data: [70, 80, 70, 65, 65, 65, 60, 70, 80, 70, 80, 65],
      backgroundColor: [
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(74, 222, 128, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
        'rgba(237, 242, 247, 1)',
      ],
      borderRadius: 3,
    },
  ];

  const data = {
    labels: revenueFlowBarmonth,
    datasets: theme === '' ? revenueLight : revenueDark,
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        border: { dash: [5, 5] },
        grid: {
          color: theme === '' ? 'rgba(244, 244, 244, 1)' : 'rgba(42, 49, 60, 0.3)',

          borderDashOffset: 2,
        },
        gridLines: {
          zeroLineColor: 'transparent',
        },
        ticks: {
          color: theme === '' ? 'black' : 'white',
          callback(value) {
            return `${value}% `;
          },
        },
      },
      x: {
        border: { dash: [5, 5] },
        grid: {
          color: theme === '' ? 'rgba(244, 244, 244, 1)' : 'rgba(42, 49, 60, 0.3)',
          borderDash: [5, 5],
          borderDashOffset: 2,
        },
        ticks: {
          color: theme === '' ? 'black' : 'white',
        },
        gridLines: {
          zeroLineColor: 'transparent',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="xl:w-66 dark:bg-darkblack-600 flex w-full flex-col justify-between rounded-lg bg-white px-[24px] py-3">
      <div className="border-bgray-300 dark:border-darkblack-400 mb-2 flex items-center justify-between border-b pb-2">
        <h3 className="text-bgray-900 text-xl font-bold sm:text-2xl dark:text-white">Summary</h3>
        <div className="hidden items-center space-x-[28px] sm:flex">
          <div className="flex items-center space-x-2">
            <div className="bg-orange h-3 w-3 rounded-full"></div>
            <span className="text-bgray-700 text-sm font-medium dark:text-white">Lost</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-success-300 h-3 w-3 rounded-full"></div>
            <span className="text-bgray-700 text-sm font-medium dark:text-white">Signed</span>
          </div>
        </div>
        <DateFilter options={['Jan 11 - Jan 16', 'Jan 12 - Jan 16', 'Jan 13 - Jan 16']} />
      </div>
      <div className="h-[255px] w-full">
        <BarChart data={data} options={options} />
      </div>
    </div>
  );
}

export default Summary;
