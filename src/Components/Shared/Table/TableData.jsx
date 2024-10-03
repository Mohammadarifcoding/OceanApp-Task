import cn from '@/lib/Data/cn';


const TableData = ({className,children ,...rest}) => {
    return (
        <td {...rest} className={cn("px-6 py-4 whitespace-nowrap",className)}>
            {children}
        </td>
    );
};

export default TableData;