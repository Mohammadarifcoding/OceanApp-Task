import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1600px] mx-auto lg:px-10 md:px-7 px-3 py-2'>
            {children}
        </div>
    );
};

export default Container;