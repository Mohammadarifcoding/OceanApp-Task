
import cn from '../../../lib/cn';

const DefaultButton = ({ className, children }) => {
    return (
      <button
        className={cn(
          "rounded-full flex justify-center items-center gap-2 px-4 py-2 text-xs",
          className,
        )}
      >
        {children}
      </button>
    );
  };
export default DefaultButton;