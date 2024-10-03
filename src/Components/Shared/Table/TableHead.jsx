const TableHead = ({ className, children }) => {
  return (
    <th
      className={
        ("px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider",
        className)
      }
    >
      {children}
    </th>
  );
};

export default TableHead;
