import cn from '../../../lib/Data/cn';

const TextArea = ({ register, name, placeholder = 'Write here', label, className, ...rest }) => {
  return (
    <div className="flex w-full flex-col gap-1 rounded-xl border border-slate-300 bg-transparent px-3 py-2">
      <label className="text-[13px]" htmlFor={label}>
        {label}
      </label>
      <textarea
        className={cn('w-full bg-transparent font-medium placeholder:font-light focus:outline-none', className)}
        placeholder={placeholder}
        {...register(`${name}`, {
          required: `${name} is required!`
        })}
        {...rest}
      />
    </div>
  );
};

export default TextArea;
