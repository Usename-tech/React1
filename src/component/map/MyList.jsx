import { useState } from "react";

function MyList() {
    const [state, setState] = useState(["html", "css", "js", "reactjs", "angular", "node js", "expressjs", "mongodb", "next js", "nest js"]);
    return (
        <div style={{ padding: "50px" }}>
            <h2>List Of Technology</h2>
            <ul>
                {
                    state.map(function (element, index) {
                        return <li>{element}</li>
                    })
                }
            </ul>
        </div>
    );

}

export default MyList;