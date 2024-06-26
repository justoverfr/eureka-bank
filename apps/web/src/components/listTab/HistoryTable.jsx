import history from '../../data/history';
import Filter from '../forms/Filter';
import FilterFull from '../forms/FilterFull';
import Search from '../forms/Search';
import Pagination from '../Pagination';
import HistoryContent from './HistoryContent';

function HistoryTable() {
  return (
    <div className="dark:bg-darkblack-600 w-full rounded-lg bg-white px-[24px] py-[20px]">
      <div className="flex flex-col space-y-5">
        <div className="flex h-[56px] w-full space-x-4">
          <Search />
          <Filter options={['January', 'February', 'March']} />
        </div>
        <FilterFull />
        <div className="table-content w-full overflow-x-auto">
          <table className="w-full">
            <tbody>
              <tr className="border-bgray-300 dark:border-darkblack-400 border-b">
                <td className="">
                  <label className="text-center">
                    <input
                      type="checkbox"
                      className="border-bgray-400 text-success-300 dark:border-darkblack-400 dark:bg-darkblack-600 h-5 w-5 cursor-pointer rounded-full border focus:outline-none focus:ring-0"
                    />
                  </label>
                </td>
                <td className="inline-block w-[250px] px-6 py-5 lg:w-auto xl:px-0">
                  <div className="flex w-full items-center space-x-2.5">
                    <span className="text-bgray-600 dark:text-bgray-50 text-base font-medium">
                      Customer name
                    </span>
                    <span>
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.332 1.31567V13.3157"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.66602 13.3157V1.31567"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5 xl:px-0">
                  <div className="flex w-full items-center space-x-2.5">
                    <span className="text-bgray-600 dark:text-bgray-50 text-base font-medium">
                      Date
                    </span>
                    <span>
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.332 1.31567V13.3157"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.66602 13.3157V1.31567"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5 xl:px-0">
                  <div className="flex items-center space-x-2.5">
                    <span className="text-bgray-600 dark:text-bgray-50 text-base font-medium">
                      Amount
                    </span>
                    <span>
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.332 1.31567V13.3157"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.66602 13.3157V1.31567"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5 xl:w-[165px] xl:px-0">
                  <div className="flex w-full items-center space-x-2.5">
                    <span className="text-bgray-600 dark:text-bgray-50 text-base font-medium">
                      Payment
                    </span>
                    <span>
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.332 1.31567V13.3157"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.66602 13.3157V1.31567"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5 xl:w-[165px] xl:px-0">
                  <div className="flex w-full items-center space-x-2.5">
                    <span className="text-bgray-600 text-base font-medium">Status</span>
                    <span>
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.332 1.31567V13.3157"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.66602 13.3157V1.31567"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </td>
                <td className="py-5"></td>
              </tr>
              {history.map((client) => (
                <HistoryContent key={client.id} history={client} />
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default HistoryTable;
