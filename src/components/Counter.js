import { useState } from "react";

const Counter = () => {
    window.scrollTo( window.x === 0, window.y === 0);
    
    const [counter, setCounter] = useState(0);

    return (
        <div className="text-center ">
            <h1>Counter</h1>
            <p data-testid="counter" >{counter}</p>
            
            <div>
                <button onClick={() => setCounter(counter + 1)} >incrementBtn</button>
            </div>
            
            <div>
                <button onClick={() => setCounter(counter - 1)} >decrementBtn</button>
            </div>
        </div>
    );
}
export default Counter;