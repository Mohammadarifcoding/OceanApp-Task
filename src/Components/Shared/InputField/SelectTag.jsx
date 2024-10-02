import { FiChevronDown } from 'react-icons/fi';

const SelectTag = ({ options, value, onChange }) => {
  return (
    <div className="inline-block relative w-40">
      <select
        className="block appearance-none w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none text-black dark:text-white"
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-400">
        <FiChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
};

export default SelectTag;
