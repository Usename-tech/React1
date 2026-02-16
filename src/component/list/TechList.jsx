import { useState } from "react";


var techNames = ["spring", "java", "oracle", "aws", "angular"]
function TechList() {
    const [state, setState] = useState(techNames);
    return (
        <div style={{ padding: "50px" }}>
            <h2>Tech List</h2>
            <ol>
                {
                    state.map((element) => {
                        return <li> {element} </li>
                    })
                }
            </ol>

        </div>
    );
}
export default TechList;


