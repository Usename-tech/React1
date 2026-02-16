import { useState } from "react";

function Counter(props) {
    var myArray = useState(0);

    function increaseCount() {
        myArray[1](myArray[0] + 1);

    }

    return (
        <div style={{ textAlign: "center", margin: "100px auto" }}>
            <h1>Counter App</h1>

            <h2 style={{ color: "green" }}>Count Value is: {myArray[0]}</h2>
            <button onClick={increaseCount}>incCount</button>
        </div>
    );
}

export default Counter;