import { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { MdDeleteSweep } from 'react-icons/md';
import cn from '../../../lib/Data/cn';
import SelectInput from './SelectInput';

const CurriculumInput = ({ readOnly = false, ref, type = 'text', register, name, label, text, className, onAddNewInputClick, onAddCategory, ...props }) => {
  // select type
  const [types, setType] = useState('');
  const allTypes = ['Video', 'Text', 'File'];
  // category value
  const [learnCount, setLearnCount] = useState(0);
  const [learningPoints, setLearningPoints] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  // sub category value
  const [additionalInputVisible, setAdditionalInputVisible] = useState(false);
  const [subCategory, setSubCategory] = useState('');
  const [subCategoriesList, setSubCategoriesList] = useState([]);

  // handle adding category
  const handleAddClick = () => {
    if (inputVisible) {
      const inputValue = document.getElementById(`learning_point_${learnCount}`).value;
      if (inputValue.trim() !== '') {
        setLearningPoints([...learningPoints, inputValue]);
        setLearnCount((prevCount) => prevCount + 1);
        document.getElementById(`learning_point_${learnCount}`).value = '';
        onAddCategory();
      }
    }
    setInputVisible(!inputVisible);
  };

  // handle adding sub-category
  const handleAddNewInputClick = () => {
    if (types && subCategory.trim() !== '') {
      const combinedValue = {
        type: types,
        subCategory
      };
      setSubCategoriesList([...subCategoriesList, combinedValue]);
      setType('');
      setSubCategory('');
      setAdditionalInputVisible(!additionalInputVisible);

      if (onAddNewInputClick) {
        onAddNewInputClick(combinedValue);
      }
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
        <h1 className="text-lg font-medium">{text}</h1>
        <div onClick={handleAddClick} className="flex w-max cursor-pointer items-center gap-3 rounded-lg bg-primary px-10 py-3 text-sm font-semibold text-white">
          {inputVisible ? 'Add +' : '+ Add New Category'}
        </div>
      </div>

      {/* Display category field values */}
      <ul>
        {learningPoints.map((point, idx) => (
          <div className="mb-5 flex justify-between gap-5 rounded-md bg-gray-100 p-2 text-xl font-semibold drop-shadow-md" key={idx}>
            <li>{point}</li>
            <div className="flex items-center justify-center gap-5">
              {additionalInputVisible ? (
                <span className="flex cursor-pointer items-center gap-3 rounded-lg text-sm font-semibold text-primary" onClick={handleAddNewInputClick}>
                  Add +
                </span>
              ) : (
                <BsPlusCircleFill className="cursor-pointer text-xl text-green-800" onClick={() => setAdditionalInputVisible(true)} />
              )}
              <MdDeleteSweep className="cursor-pointer text-2xl text-red-600" />
            </div>
          </div>
        ))}
      </ul>

      {/* Display sub-category field values */}
      <ul className="space-y-4">
        {subCategoriesList.map((subcategory, index) => (
          <li key={index} className="flex justify-between rounded-md bg-gray-100 p-2 drop-shadow-md">
            {subcategory.type}: {subcategory.subCategory}
            <MdDeleteSweep className="cursor-pointer text-2xl text-red-600" />
          </li>
        ))}
      </ul>

      {/* Sub-category input field */}
      {additionalInputVisible && (
        <div className="flex flex-col justify-center gap-5 md:flex-row">
          <div className="w-1/4">
            <SelectInput name="types" label="Types" options={allTypes} defaultValue="Select Text" setValue={setType} />
          </div>
          <div className="flex w-3/4 flex-col gap-1 rounded-xl border border-slate-300 px-3 py-2">
            <label className="text-[13px]" htmlFor={`${label}_new`}>
              Add sub category
            </label>
            <input
              {...props}
              id={`learning_point_new`}
              readOnly={readOnly}
              name={`${name}_new`}
              type={type}
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className={cn('bg-transparent font-medium placeholder:font-light focus:outline-none ', className)}
              placeholder={`Write here`}
            />
          </div>
        </div>
      )}

      {/* Category input field */}
      {inputVisible && (
        <div className="flex w-full flex-col gap-1 rounded-xl border border-slate-300 px-3 py-2">
          <label className="text-[13px]" htmlFor={label}>
            {label}
          </label>
          <input
            {...props}
            id={`learning_point_${learnCount}`}
            readOnly={readOnly}
            ref={ref}
            name={`learning_point_${learnCount}`}
            type={type}
            className={cn('w-full bg-transparent font-medium placeholder:font-light focus:outline-none ', className)}
            placeholder={`Write here `}
            {...register(`learning_point_${learnCount}`, {
              required: `This field is required!`
            })}
          />
        </div>
      )}
    </div>
  );
};

export default CurriculumInput;
