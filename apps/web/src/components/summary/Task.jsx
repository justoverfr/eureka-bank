import ProtoTypes from 'prop-types';

function Task({ title, value, children, className, fontColor }) {
  return (
    <div
      className={`flex h-[128px]  w-full items-center justify-center rounded-md ${
        className ? className : ''
      }`}
    >
      <div>
        <div className="mb-3 flex justify-center">
          <span>{children}</span>
        </div>
        <p
          className={`text-center text-xs ${
            fontColor ? fontColor : 'dark:text-bgray-50 text-bgray-500'
          }`}
        >
          {title}
        </p>
        <p
          className={`text-base font-bold ${
            fontColor ? fontColor : 'text-bgray-900 dark:text-white'
          } text-center`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

Task.propTypes = {
  title: ProtoTypes.string,
  value: ProtoTypes.string,
  children: ProtoTypes.node,
  className: ProtoTypes.string,
  fontColor: ProtoTypes.string,
};

export default Task;
