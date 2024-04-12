import ProtoTypes from 'prop-types';

function Files({ name, size, children }) {
  return (
    <div className="flex h-24 w-24 flex-col items-center lg:h-44 lg:w-44">
      <div className="flex w-full justify-center">{children}</div>
      <h4 className="mt-2 text-sm  font-semibold md:text-base dark:text-white">{name}</h4>
      <span className="text-bgray-600 dark:text-bgray-50 text-base">{size}</span>
    </div>
  );
}
Files.propTypes = {
  name: ProtoTypes.string,
  size: ProtoTypes.string,
  children: ProtoTypes.node,
};

export default Files;
