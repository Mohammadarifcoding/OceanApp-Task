import cn from '../../../lib/Data/cn';

const StaticsCards = ({ title, data, className }) => {
  return (
    <div className={cn('mx-auto flex w-[250px] flex-col items-center justify-center gap-3 rounded-[20px] bg-[#F5F5F5] py-10 shadow-lg dark:bg-gray-800', className)}>
      <h3 className="text-3xl font-bold text-default dark:text-white">{data}</h3>
      <p className="text-base font-bold text-grayDefault dark:text-gray-400">{title}</p>
    </div>
  );
};

export default StaticsCards;
