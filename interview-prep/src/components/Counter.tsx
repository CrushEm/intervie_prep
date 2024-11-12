import React, { useState } from "react";

interface CounterProps {
    initialCount: number;
    minValue?: number; 
    maxValue?: number; 
}

function Counter({ initialCount , minValue= 0, maxValue= 10 }: CounterProps) {

    const [countValue, setCountValue] = useState(initialCount);

    function handleIncrease() {
        if(countValue < maxValue){
            setCountValue( countValue + 1);
        }
    }
    function handleDecrease() {
        if(countValue > minValue){
            setCountValue( countValue - 1);
        }
    }
    function handleReset(){
        setCountValue( initialCount );
    }

    return (
        <>
            <h3>Value: {countValue}</h3>
            <button onClick={handleIncrease}>+</button><button onClick={handleDecrease}>-</button>
            <br />
            <button onClick={handleReset}>reset</button>
        </>
    )

}

export default Counter