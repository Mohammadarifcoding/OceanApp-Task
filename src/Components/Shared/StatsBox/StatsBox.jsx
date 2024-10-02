


const StatsBox =({ icon: Icon, value, label, bgColor }) => {
    return (
      <div className="w-full    ">
        <div className="flex items-center rounded-xl bg-white px-5 py-6 shadow-sm border border-gray-200">
          <div className={`rounded-full ${bgColor} bg-opacity-75 p-3`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          <div className="mx-5">
            <h4 className="text-2xl font-semibold text-gray-700">{value}</h4>
            <div className="text-gray-500">{label}</div>
          </div>
        </div>
      </div>
    );
  };

export default StatsBox;