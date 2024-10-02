import cn from '../../../lib/Data/cn';

const Description = ({ text = 'Nothing', className }) => {
  return <p className={cn('text-gray-500 text-xs', className)}>{text}</p>;
};

export default Description;
