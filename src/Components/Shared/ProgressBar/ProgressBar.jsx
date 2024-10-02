

const ProgressBar = ({ progress }) => {
   
    return (
        <div className="mx-auto flex  justify-center items-center gap-3">
        <div className="flex h-2 w-full items-center justify-center rounded-full bg-primary/20">
            <div style={{ width: `${progress}%` }} className="transition-width mr-auto h-2 w-0 rounded-full bg-primary duration-500"></div>
        </div>
        <span className="text-center text-sm font-medium text-primary">{progress}%</span>
    </div>
    );
};

export default ProgressBar;