import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import cn from '../../../lib/Data/cn';

const SelectInput = ({ className, setValue, last, label, defaultValue, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  return (
    <div className={cn('relative w-full', className)}>
      {/* dropdown - btn */}
      <div onClick={() => setIsOpen(!isOpen)} className="flex">
        <div className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-slate-300 px-3 py-[14px]  dark:bg-darkBackground">
          <div>
            <label className="absolute -top-2 left-[10px] bg-gray-50 px-2 text-xs text-slate-400 duration-300 group-hover:text-primary" htmlFor={label}>
              {label}
            </label>
            <h1 className="text-sm text-slate-400 dark:text-white">{selectedValue}</h1>
          </div>
          <MdOutlineKeyboardArrowDown className={cn(`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300`, 'text-gray-500 dark:text-white')} />
        </div>
      </div>
      {/* dropdown - options */}
      <div
        className={cn(
          'absolute z-30 mx-auto max-h-[350px] w-full overflow-y-auto rounded-xl border bg-white py-4 duration-300',
          `${isOpen ? (last ? 'visible z-50 opacity-100' : 'visible opacity-100') : last ? 'invisible -top-[410px] opacity-0' : 'invisible top-10 opacity-0'}`,
          'dark:border-gray-600 dark:bg-darkBackground'
        )}
      >
        {options?.map((option, idx) => (
          <div
            key={idx}
            onClick={(e) => {
              setSelectedValue(e.target.textContent);
              setValue(e.target.textContent);
              setIsOpen(false);
            }}
            className="px-6 py-2 text-gray-500 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectInput;
