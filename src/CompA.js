import React, { createContext, useMemo, useState } from 'react';

const CompA = () => {
    const [state, setState] = useState(false);
    const value = Math.random().toFixed(2);

    const memoizedValue = useMemo(() => value, []);

    
 
    return (
        <>
            <h1>Generate Value={value}</h1>
            <h1>Memoized Value={memoizedValue}</h1>
            <h1>Tarun</h1>
            <button onClick={() => setState(!state)} >Click Me</button>
        </>


    )
}
export default CompA;
