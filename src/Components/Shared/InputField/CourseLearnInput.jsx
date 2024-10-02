import { useState } from 'react';
import { LuDelete } from 'react-icons/lu';
import { MdDeleteOutline } from 'react-icons/md';
import cn from '../../../lib/Data/cn';

const CourseLearnInput = ({ id, ref, readOnly = false, placeholder, defaultValue, type = 'text', register, name, label, text, className, liClassName, ...props }) => {
  // learn course input
  const [learnCount, setLearnCount] = useState(0);
  const [learningPoints, setLearningPoints] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);

  // handel add button
  const handleAddClick = () => {
    if (!inputVisible) {
      setInputVisible(true);
    } else {
      const inputValue = document.getElementById(`learning_point_${learnCount}`).value;
      if (inputValue.trim() !== '') {
        setLearningPoints([...learningPoints, inputValue]);
        setLearnCount((prevCount) => prevCount + 1);
        document.getElementById(`learning_point_${learnCount}`).value = '';
      }
    }
  };
  // handle delete ul field
  const handleDeleteClick = (index) => {
    setLearningPoints((prevPoints) => prevPoints.filter((_, idx) => idx !== index));
  };
  // handle input visibility
  const handleInputRemoveClick = () => {
    setInputVisible(false);
  };
  return (
    <div className="space-y-5">
      <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
        <h1 className="mb-3 text-base font-medium md:text-lg">{text}</h1>
        <div onClick={handleAddClick} className="flex w-max cursor-pointer items-center gap-3 rounded-lg bg-primary px-10 py-3 text-sm font-semibold text-white">
          {inputVisible ? 'Add +' : '+ Add New Point'}
        </div>
      </div>
      {/* Display added learning points */}
      <ul>
        {learningPoints.map((point, idx) => (
          <div className="mb-5 flex justify-between  gap-5 rounded-md bg-white p-2 drop-shadow-md" key={idx}>
            <li className={cn('text-base', liClassName)}>{point}</li>
            <MdDeleteOutline className="cursor-pointer text-2xl text-red-600" onClick={() => handleDeleteClick(idx)} />
          </div>
        ))}
      </ul>
      {inputVisible && (
        <div className={cn('group relative rounded-lg drop-shadow-sm')}>
          <input
            className={cn(' w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm duration-300 focus:outline-none group-hover:border-primary', className)}
            {...props}
            id={`learning_point_${learnCount}`}
            name={`learning_point_${learnCount}`}
            type={type}
            ref={ref}
            placeholder={placeholder}
            defaultValue={defaultValue}
            readOnly={readOnly ? true : false}
            {...register(`${name}`)}
          />
          <LuDelete className="absolute right-2 top-2 cursor-pointer text-2xl text-red-600" onClick={handleInputRemoveClick} />
          <label className="absolute -top-2 left-[10px] bg-gray-50 px-2 text-xs text-slate-400 duration-300 group-hover:text-primary" htmlFor={id} required>
            {label}
          </label>
        </div>
      )}
    </div>
  );
};

export default CourseLearnInput;
