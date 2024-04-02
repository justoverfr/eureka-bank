'use client';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import ProtoTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

ChartJS.register(Filler);

function BarChart({ options, data }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );
  return <Bar options={options} data={data} />;
}

BarChart.propTypes = {
  options: ProtoTypes.object,
  data: ProtoTypes.object,
};

export default BarChart;
