import cn from '../../../lib/Data/cn';

const Title = ({ text = 'Nothing', className }) => {
  return <h2 className={cn('font-bold text-2xl text-default', className)}>{text}</h2>;
};

export default Title;
