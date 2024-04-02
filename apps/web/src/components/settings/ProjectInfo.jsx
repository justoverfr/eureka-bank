function ProjectInfo() {
  return (
    <div>
      <h4 className="text-bgray-900 mb-3 text-base font-semibold uppercase dark:text-white">
        Info
      </h4>
      <ul className="space-y-6">
        <li className="flex justify-between">
          <span className="text-bgray-700 text-base font-medium dark:text-white">
            Type
          </span>
          <span className="text-bgray-700 dark:text-bgray-50 text-left text-base font-medium">
            Folder
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-bgray-700 text-base font-medium dark:text-white">
            Size
          </span>
          <span className="text-bgray-700 dark:text-bgray-50 text-left text-base font-medium">
            500 MB
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-bgray-700 text-base font-medium dark:text-white">
            Owner
          </span>
          <span className="text-bgray-700 dark:text-bgray-50 text-left text-base font-medium">
            EurekaBank
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-bgray-700 text-base font-medium dark:text-white">
            Location
          </span>
          <span className="text-bgray-700 dark:text-bgray-50 text-left text-base font-medium">
            My Files
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-bgray-700 text-base font-medium dark:text-white">
            Modified
          </span>
          <span className="text-bgray-700 text-base font-medium dark:text-white">
            Sep 17, 2020 4:25
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-bgray-700 text-base font-medium dark:text-white">
            Created
          </span>
          <span className="text-bgray-700 text-base font-medium dark:text-white">
            Sep 10, 2020 2:25
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ProjectInfo;
