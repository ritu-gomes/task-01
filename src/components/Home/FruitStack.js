import React from 'react';

const FruitStack = ({color}) => {
    return (
        <>
            <div className={`busket mt-1 px-1 bg-${color}`}></div>
        </>
    );
};

export default FruitStack;