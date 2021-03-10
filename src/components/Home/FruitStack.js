import React from 'react';

const FruitStack = ({color}) => {
    return (
        <>
            <div className={`busket p-2 bg-${color}`}></div>
        </>
    );
};

export default FruitStack;