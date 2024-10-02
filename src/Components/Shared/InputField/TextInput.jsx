import cn from "../../../lib/Data/cn";


const TextInput = ({
  type,
  label,
  id,
  className,
  parentClassName,
  placeholder,
  register,
  name,
  defaultValue,
  readOnly,
  labelClassName,
  ...props
}) => {
  return (
    <div
      className={cn(
        "group relative rounded-lg drop-shadow-sm",
        parentClassName,
      )}
    >
      <input
        className={cn(
          " w-full rounded-lg border border-gray-300  bg-gray-50 px-4 py-[14px] text-sm duration-300 focus:outline-none group-hover:border-primary dark:bg-gray-900",
          className,
        )}
        {...props}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        readOnly={readOnly ? true : false}
        {...register(`${name}`, {
          required: `${name} is required!`,
        })}
      />
      <label
        className={cn(
          "absolute -top-2 left-[10px] bg-gray-50  px-2 text-xs text-slate-400 duration-300 group-hover:text-primary dark:bg-gray-900",
          labelClassName,
        )}
        htmlFor={id}
        required
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
