const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-[1600px] px-3 py-10 md:px-7 lg:px-10">
      {children}
    </div>
  );
};

export default Container;
